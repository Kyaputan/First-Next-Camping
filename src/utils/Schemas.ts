import { z } from "zod"

export const ProfileSchema = z.object({
    FirstName: z.string().min(2, "First name must be at least 2 characters long"),
    LastName: z.string().min(2, "Last name must be at least 2 characters long"),
    UserName: z.string().min(2, "User name must be at least 2 characters long"),
})

export const validataWithZod = <T>(
    schema: z.ZodSchema<T>,
    data: unknown): T => {
    const result = schema.safeParse(data)
    if (!result.success) {
        const errorMessages = result.error.issues.map((issue) => issue.message)
        throw new Error(errorMessages.join("\n\n"))
    }
    return result.data
}