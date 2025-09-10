"use client"

import { useClerk } from "@clerk/nextjs"
import { Usetoast } from "./Usetoast"
import { useRouter } from "next/navigation"

const SignOutLinks = () => {
    const { signOut } = useClerk()
    const { toast } = Usetoast()
    const router = useRouter()

    return (
        <button
            onClick={() =>
                signOut(() => {
                    toast({
                        title: "Signed out",
                        description: "Logout successfully",
                    })
                    router.push("/")
                })
            }
        >
            Sign Out
        </button>
    )
}

export default SignOutLinks
