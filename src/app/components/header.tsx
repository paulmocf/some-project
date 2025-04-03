import MainNav from "@/app/components/MainNav";
import MobileNav from "@/app/components/MobileNav";
import {ThemeToggler} from "@/app/components/ThemeToggler";
import Link from "next/link";

export type NavItem = {
    name: string;
    href: string;
};

const navItems: NavItem[] = [
    {name: "Home", href: "/"},
    {name: "Services", href: "#services"},
    {name: "About", href: "#about"},
    {name: "Case Studies", href: "#case-studies"},
    {name: "Contact", href: "#contact"},
]

export default function Header() {

    return (
        <header
            className="sticky flex items-center container justify-between mx-auto top-0 w-full  h-14 mt-2 z-50  border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex items-center gap-2">
                <Link href="/" className="font-bold text-xl text-blue-600">
                    Firma X
                </Link>
            </div>
            <div>
                {/*Desktop*/}
                <MainNav navItems={navItems}/>

                {/*Mobile*/}
                <MobileNav navItems={navItems}/>
            </div>
            <div className="hidden md:flex">
                <ThemeToggler/>
            </div>
        </header>
    );
};