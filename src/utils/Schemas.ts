import { z } from "zod"

export const ProfileSchema = z.object({
    FirstName: z.string().min(2, "First name must be at least 2 characters long"),
    LastName: z.string().min(2, "Last name must be at least 2 characters long"),
    UserName: z.string().min(2, "User name must be at least 2 characters long"),
})