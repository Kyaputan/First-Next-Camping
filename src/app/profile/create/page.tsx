
import FormInPut from "@/components/Form/FormInPut";    
import SubmitButtons from "@/components/Form/Buttons";
import FormContainer from "@/components/Form/Formcontainer";
import { CreateProfileAction } from "@/actions/actions";

const CreateProfilePage = () => {
    return (
        <section>
            <h1 className="text-2xl font-semibold mb-8 capitalize">New User</h1>
            <div className="border border-gray-200 p-6 rounded-md shadow-sm">
                <FormContainer action={CreateProfileAction}>

                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                        <FormInPut name="FirstName"type="text"label="First Name"placeholder="Enter your first name" />
                        <FormInPut name="LastName"type="text"label="Last Name"placeholder="Enter your last name" />
                        <FormInPut name="UserName"type="text"label="User Name"placeholder="Enter your user name" />
                    </div>
                    <SubmitButtons label="Create" size={{size: "lg"}}/>

                </FormContainer>
            </div>
        </section>
    );
};

export default CreateProfilePage;
