import { Menu } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import UserIcon from "./UserIcon";
import Link from "next/link";
import { Navlinks } from "@/utils/links";


const DropDownListMenu = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant='default'>
                    <Menu />
                    <UserIcon />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {Navlinks.map((link, index) => (
                    <DropdownMenuItem key={index}>
                        <Link href={link.href}>{link.label}</Link>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default DropDownListMenu;
