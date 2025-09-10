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
import { SignInButton, SignUpButton } from "@clerk/nextjs"

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
                        <SignUpButton mode="modal"/>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <SignInButton mode="modal"/>
                    </DropdownMenuItem>
                </SignedOut>


                {/* SignedIn */}
                <SignedIn>
                    <DropdownMenuSeparator />
                    {Navlinks.map((link, index) => (
                        <DropdownMenuItem key={index}>
                            <Link href={link.href}>{link.label}</Link>
                        </DropdownMenuItem>
                    ))}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <SingOutLinks />
                    </DropdownMenuItem>
                </SignedIn>
            </DropdownMenuContent>

        </DropdownMenu>
    );
};

export default DropDownListMenu;
