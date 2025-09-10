'use server'
import { ProfileSchema } from "@/utils/Schemas"
import { validataWithZod } from "@/utils/Schemas"
import { renderError , ErrorFields } from "@/utils/Error"




export const CreateProfileAction = async (prevState: any,formData: FormData) => {
    try {
        const rawData = Object.fromEntries(formData)
        const result = validataWithZod(ProfileSchema,rawData)
        const user = await result
        console.log(user)
        return {message: "User created successfully"}
    } catch (error) {
        return renderError(error as ErrorFields)
    }
}