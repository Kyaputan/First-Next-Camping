"use client"

import { useClerk } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"
import { Usetoast } from "./Usetoast"

const SignOutLinks = () => {
    const { signOut } = useClerk()
    const { toast } = Usetoast()

    return (
        <Button
            variant="outline"
            onClick={() =>
                signOut(() => {
                    toast({
                        title: "Signed out",
                        description: "คุณได้ออกจากระบบเรียบร้อยแล้วค่ะ",
                    })
                })
            }
        >
            Sign Out
        </Button>
    )
}

export default SignOutLinks
