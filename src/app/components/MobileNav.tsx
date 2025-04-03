"use client"

import {Button} from "@/components/ui/button"
import {Sheet, SheetContent, SheetFooter, SheetTrigger,} from "@/components/ui/sheet"
import {MainNavProps} from "@/app/components/MainNav";
import Link from "next/link";
import {useState} from "react";
import {Menu} from "lucide-react";
import {ThemeToggler} from "@/app/components/ThemeToggler";


export default function MobileNav({navItems}: MainNavProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden ml-auto">
                <Button variant="outline">
                    <Menu className="h-6 w-6"/>
                </Button>
            </SheetTrigger>
            <SheetContent>
                <nav className="flex flex-col items-center justify-center gap-4 mt-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-lg font-medium transition-colors hover:text-blue-600"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>
            <SheetFooter className="ml-auto" >
                <ThemeToggler/>
            </SheetFooter>
            </SheetContent>
        </Sheet>
    )
        ;
};