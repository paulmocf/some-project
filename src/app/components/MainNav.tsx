import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Link from "next/link";
import {NavItem} from "@/app/components/header";


export type MainNavProps = {
    navItems: NavItem[];
};

export default function MainNav({navItems}: MainNavProps) {

    return (
        <div className="hidden md:flex gap-5">
            <NavigationMenu>
                <NavigationMenuList>
                    {navItems.map((value, index) =>
                        <NavigationMenuItem key={index}>
                            <Link href={value.href}
                                  className="text-sm font-medium transition-colors hover:text-blue-600" legacyBehavior
                                  passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    {value.name}
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    )}
                </NavigationMenuList>
            </NavigationMenu>

        </div>
    )
        ;
};