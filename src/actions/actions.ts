'use server'
import { z } from "zod"
import { ProfileSchema } from "@/utils/Schemas"
import { validataWithZod } from "@/utils/Schemas"

export const CreateProfileAction = async (prevState: any,formData: FormData) => {
    try {
        const rawData = Object.fromEntries(formData)
        const result = validataWithZod(ProfileSchema,rawData)
        const user = await result
        console.log(user)
        return {message: "User created successfully"}
    } catch (error) {
        return {message: error.message || "Something went wrong"}
    }
}