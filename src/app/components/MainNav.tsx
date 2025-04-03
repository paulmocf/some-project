import Link from "next/link";
import {NavItem} from "@/app/components/header";


export type MainNavProps = {
    navItems: NavItem[];
};

export default function MainNav({navItems}: MainNavProps) {

    return (
        <nav className="hidden md:flex gap-6">
            {navItems.map((value, index) =>
                <Link href={value.href}
                      className="text-sm font-medium transition-colors hover:text-blue-600"
                      key={index}>
                    {value.name}
                </Link>
            )}
        </nav>

    )
        ;
};