import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const CreateProfileAction = async (formData: FormData) => {
    'use server'
    const firstName = formData.get('firstName') as string
    console.log('firstName', firstName)
}


const CreateProfilePage = () => {
    return (
        <section>
            <h1 className="text-2xl font-semibold mb-8 capitalize">New User</h1>
            <div>
                <form action={CreateProfileAction}>
                    <div className="mb-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input type="text" name="firstName" />
                    </div>
                    <Button type="submit" size="lg">Create</Button>
                </form>
            </div>
        </section>
    );
};

export default CreateProfilePage;
