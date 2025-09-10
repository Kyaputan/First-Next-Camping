
import FormInPut from "@/components/Form/FormInPut";
import SubmitButtons from "@/components/Form/Buttons";
import FormContainer from "@/components/Form/Formcontainer";
import { CreateLandmarkAction } from "@/actions/actions";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import CategoryInput from "@/components/Form/CategoryInput";
import TextAreaInput from "@/components/Form/TextAreaInput";
import ProvincesInput from "@/components/Form/ProvincesInput";
import { ProvinvesCombobox } from "@/components/Form/ProvinvesCombobox";

const CreateLandmarkPage = async () => {

    return (
        <section>
            <h1 className="text-2xl font-semibold mb-8 capitalize">Creata Landmark</h1>
            <div className="border border-gray-200 p-6 rounded-md shadow-sm">
                <FormContainer action={CreateLandmarkAction}>

                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                        <FormInPut name="name"
                            type="text"
                            label="Landark"
                            placeholder="Enter your Landmark" />
                        <CategoryInput />
                    </div>

                    <TextAreaInput name="description" />
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                        <FormInPut name="price"
                            type="number"
                            label="price"
                            placeholder="price" />
                        {/* <ProvincesInput /> ของเก่า */}
                        <ProvinvesCombobox />
                    </div>
                    <SubmitButtons label="Create Landmark" size={{ size: "lg" }} />

                </FormContainer>
            </div>
        </section>
    );
};

export default CreateLandmarkPage;
