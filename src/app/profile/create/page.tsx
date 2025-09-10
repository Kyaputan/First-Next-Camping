import FormInPut from "@/components/Form/FormInPut";    
import SubmitButtons from "@/components/Form/Buttons";

const CreateProfileAction = async (formData: FormData) => {
    'use server'
    const firstName = formData.get('FirstName') as string
    const lastName = formData.get('LastName') as string
    const userName = formData.get('UserName') as string
    const fullName = `${firstName} ${lastName}`
    console.log('fullName', fullName)
    console.log('userName', userName) 
}


const CreateProfilePage = () => {
    return (
        <section>
            <h1 className="text-2xl font-semibold mb-8 capitalize">New User</h1>
            <div className="border border-gray-200 p-6 rounded-md shadow-sm">
                <form action={CreateProfileAction}>
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                        <FormInPut name="FirstName"
                            type="text"
                            label="First Name"
                            placeholder="Enter your first name" />

                        <FormInPut name="LastName"
                            type="text"
                            label="Last Name"
                            placeholder="Enter your last name" />

                        <FormInPut name="UserName"
                            type="text"
                            label="User Name"
                            placeholder="Enter your user name" />
                    </div>
                    <SubmitButtons label="Create" size={{size: "lg"}}/>
                </form>
            </div>
        </section>
    );
};

export default CreateProfilePage;
