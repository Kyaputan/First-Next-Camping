"use client"
import { toast as sonner } from "sonner"

type ToastParams = {
  title?: string
  description?: string
  actionLabel?: string
  onAction?: () => void
}

export function Usetoast() {
  return {
    toast: ({ title = "แจ้งเตือน", description, actionLabel, onAction }: ToastParams) =>
      sonner(title, {
        description,
        action: actionLabel && onAction ? 
        { label: actionLabel, 
        onClick: onAction } : undefined,
      }),
  }
}
