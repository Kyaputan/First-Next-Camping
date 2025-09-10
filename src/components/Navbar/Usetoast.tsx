"use client"
import { toast as sonner } from "sonner"
import { ToastParams } from "@/utils/types"

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
