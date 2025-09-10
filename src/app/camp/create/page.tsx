
import FormInPut from "@/components/Form/FormInPut";    
import SubmitButtons from "@/components/Form/Buttons";
import FormContainer from "@/components/Form/Formcontainer";
import { CreateLandmarkAction } from "@/actions/actions";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const CreateLandmarkPage = async () => {

    return (
        <section>
            <h1 className="text-2xl font-semibold mb-8 capitalize">Creata Landmark</h1>
            <div className="border border-gray-200 p-6 rounded-md shadow-sm">
                <FormContainer action={CreateLandmarkAction}>

                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                        <FormInPut name="name"
                        type="text"
                        label="Landaark"
                        placeholder="Enter your Landmark" />
                    </div>
                    <SubmitButtons label="Create Landmark" size={{size: "lg"}}/>

                </FormContainer>
            </div>
        </section>
    );
};

export default CreateLandmarkPage;
