"use client"
import { useActionState } from "react"
import { Usetoast } from "@/components/Navbar/Usetoast"
import { useEffect } from "react"
import { FormContainerProps } from "@/utils/types"

const initialState = {
    message: "",
}

const FormContainer = (props: FormContainerProps) => {
    const {action , children} = props
    const [state , formAction] = useActionState(action,initialState)

    useEffect(() => {
        if (state.message) {
            Usetoast().toast({
                title: "Success",
                description: state.message,
            })
        }
    }, [state])

    return (
        <form action={formAction}>
            {children}
        </form>
    )
}

export default FormContainer