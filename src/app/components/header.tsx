"use client"

import Link from "next/link";
import {Button} from "@/components/ui/button";
import React, {useState} from "react";
import {ThemeToggler} from "@/app/components/ThemeToggler";
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import {Menu} from "lucide-react";


export default function Header() {
    const [isOpen, setIsOpen] = useState(false)


    const navItems = [
        {name: "Home", href: "#home"},
        {name: "Services", href: "#services"},
        {name: "About", href: "#about"},
        // {name: "Case Studies", href: "#case-studies"},
        {name: "Contact", href: "#contact"},
    ]

    function getOnClick() {
        return (event: React.SyntheticEvent) => {
            event.preventDefault();
            setIsOpen(false)
            const target = event.target as HTMLAnchorElement;
            const id = target.getAttribute('href')?.replace('#', '');
            const element = document.getElementById(String(id));
            const navbar = document.getElementById('aaa'); // Ia înălțimea navbarului

            if (element) {
                const navbarHeight = navbar?.offsetHeight ?? 0; // Obține înălțimea navbarului (fallback la 0)
                const targetPosition = element.offsetTop - navbarHeight; // Ajustează poziția de scroll
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }

        };
    }

    return (
        <header id="aaa"
                className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center gap-2">
                    <Link href="/" className="font-bold text-xl text-blue-600">
                        Firma X
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex gap-6">
                    {navItems.map((item) => (
                        <a key={item.name} href={item.href}
                           className="text-sm font-medium transition-colors hover:text-blue-600"
                           onClick={getOnClick()}>
                            {item.name}
                        </a>
                    ))}
                </nav>

                <div className="hidden md:flex items-center gap-5">
                    <ThemeToggler/>
                    <Button><a href="#contact">Contact</a></Button>
                </div>

                {/* Mobile Navigation */}

                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild className="md:hidden">
                        <Button variant="ghost" size="icon" aria-label="Menu">
                            <Menu className="h-6 w-6"/>
                        </Button>
                    </SheetTrigger>

                    <SheetContent side="right" className="w-[300px] sm:w-[400px] flex flex-col justify-between">
                        <nav className="flex flex-col gap-4 mt-8 justify-center">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    className="text-lg font-medium transition-colors hover:text-blue-600"
                                    onClick={getOnClick()}
                                    href={item.href}>
                                    {item.name}
                                </a>
                            ))}
                        </nav>

                        <div className="flex items-center justify-center ">
                            <ThemeToggler/>
                        </div>
                    </SheetContent>
                </Sheet>


            </div>
        </header>
    );
}