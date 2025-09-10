import type { LucideIcon } from "lucide-react";

export type actionFunction = (
    prevState: any,
    formData: FormData
) => Promise<{ message: string; }>

export type FormContainerProps = {
    action: actionFunction
    children: React.ReactNode
}

export type ToastParams = {
    title?: string
    description?: string
    actionLabel?: string
    onAction?: () => void
}

export type FormInPutProps = {
    name: string
    type: string | 'text'
    label?: string
    defaultValue?: string
    placeholder?: string
}

export type btnSize = {
    size: 'default' | 'lg' | 'sm' | 'icon'
}


export type SubmitButtonsProps = {
    label: string
    size?: btnSize
}

export type Category = {
    label: string;
    icon: LucideIcon;
  };


export type Provinces = {
    PROVINCE_ID: number;
    PROVINCE_NAME: string;
}