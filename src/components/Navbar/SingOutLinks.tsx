"use client"

import { useClerk } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"
import { Usetoast } from "./Usetoast"
import { useRouter } from "next/navigation"

const SignOutLinks = () => {
    const { signOut } = useClerk()
    const { toast } = Usetoast()
    const router = useRouter()

    return (
        <Button
            variant="outline"
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
        </Button>
    )
}

export default SignOutLinks
