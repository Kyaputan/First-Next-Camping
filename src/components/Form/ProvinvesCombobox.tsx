"use client"

import * as React from "react"
import { CheckIcon, ChevronsUpDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Command,CommandEmpty,CommandGroup,CommandInput,CommandItem,CommandList } from "@/components/ui/command"
import { Popover,PopoverContent,PopoverTrigger } from "@/components/ui/popover"
import { provinces } from "@/utils/provinces"

export function ProvinvesCombobox({defaultValue,name = "provinces",}: {
    defaultValue?: string
    name?: string
}) {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState(defaultValue || "กรุงเทพมหานคร")

    return (
        <div className="my-2">
            <Label htmlFor={name} className="block text-sm font-medium my-2 capitalize">
                {name}
            </Label>

            <input type="hidden" name={name} value={value} />

            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        id={name}
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className="w-full justify-between"
                    >
                        {value
                            ? provinces.find((p) => p.PROVINCE_NAME === value)?.PROVINCE_NAME
                            : "Select province..."}
                        <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full p-2">
                    <Command>
                        <CommandInput placeholder="Search province..." />
                        <CommandList>
                            <CommandEmpty>No provinces found.</CommandEmpty>
                            <CommandGroup>
                                {provinces.map((province) => (
                                    <CommandItem
                                        key={province.PROVINCE_NAME}
                                        value={province.PROVINCE_NAME}
                                        onSelect={(currentValue) => {
                                            setValue(currentValue === value ? "" : currentValue)
                                            setOpen(false)
                                        }}
                                    >
                                        <CheckIcon
                                            className={cn(
                                                "mr-2 h-4 w-4",
                                                value === province.PROVINCE_NAME
                                                    ? "opacity-100"
                                                    : "opacity-0"
                                            )}
                                        />
                                        {province.PROVINCE_NAME}
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
        </div>
    )
}
