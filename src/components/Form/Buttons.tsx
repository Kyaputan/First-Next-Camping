"use client"
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { CloudUpload , RefreshCw } from 'lucide-react';
import { SubmitButtonsProps } from "@/utils/types";

const SubmitButtons = (props: SubmitButtonsProps) => {
    const { label, size } = props
    const { pending } = useFormStatus()
    return (
        <Button type="submit"
            size={size?.size}
            disabled={pending}
            className="Capitalize">
            {pending ? (
                <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
            ) : (
                <CloudUpload className="mr-2 h-4 w-4" />
            )}
            {label}
        </Button>
    )
}

export default SubmitButtons
