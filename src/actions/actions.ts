'use server'
import { ProfileSchema } from "@/utils/Schemas"
import { validataWithZod } from "@/utils/Schemas"
import { renderError , ErrorFields } from "@/utils/Error"
import { clerkClient, currentUser } from "@clerk/nextjs/server"
import { prisma } from "@/lib/prisma"
import { redirect } from "next/navigation"



const getAuthUser = async () => {
    const user = await currentUser()
    if (!user) throw new Error("User not found")
    if (user.privateMetadata.hasProfile) redirect("/profile/create")
    
    return user
}


export const CreateProfileAction = async (prevState: any,formData: FormData) => {
    try {
        const user = await getAuthUser()
        const rawData = Object.fromEntries(formData)
        const result = validataWithZod(ProfileSchema,rawData)
        await prisma.profile.create({
            data: {
                clerkId: user.id,
                firstName: result.FirstName,
                lastName: result.LastName,
                username: result.UserName,
                email: user.emailAddresses[0].emailAddress,
                profileImage: user.imageUrl ?? "",
            }
        })
        const client = await clerkClient()
        await client.users.updateUserMetadata(user.id, {
            privateMetadata: {
                hasProfile: true,
            }
        })
        return {message: "User created successfully"}
    } catch (error) {
        return renderError(error as ErrorFields)
    }finally {
        redirect("/")
    }
}