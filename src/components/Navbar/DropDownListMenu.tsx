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
import SingOutLinks from "./SingOutLinks";
import { SignedIn, SignedOut } from "@clerk/nextjs"
import { SignInButton, SignOutButton, SignUpButton } from "@clerk/nextjs"

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

                {/* SignedOut */}
                <SignedOut>
                    <DropdownMenuItem>
                        <SignUpButton />
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <SignInButton />
                    </DropdownMenuItem>
                </SignedOut>

                <DropdownMenuSeparator />
                {Navlinks.map((link, index) => (
                    <DropdownMenuItem key={index}>
                        <Link href={link.href}>{link.label}</Link>
                    </DropdownMenuItem>
                ))}


                {/* SignedIn */}
                <SignedIn>
                    <DropdownMenuSeparator />
                    <SingOutLinks />
                </SignedIn>
            </DropdownMenuContent>

        </DropdownMenu>
    );
};

export default DropDownListMenu;
