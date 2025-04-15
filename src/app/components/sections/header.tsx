"use client"

import Link from "next/link";
import {Button} from "@/components/ui/button";
import React, {useState} from "react";
import {ThemeToggler} from "@/app/components/togglers/theme-toggler";
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import {Menu} from "lucide-react";
import '@/lib/i18n/i18n'
import {useTranslation} from "react-i18next";
import {LanguageToggler} from "@/app/components/togglers/language-toggler";
import handleSmoothScrolling from "@/lib/handleSmoothScrolling";


export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const {t} = useTranslation();

    const navItems = [
        {name: t("navbar.home"), href: "#hero"},
        {name: t("navbar.services"), href: "#services"},
        {name: t("navbar.about"), href: "#about"},
        // {name: "Case Studies", href: "#case-studies"},
        {name: t("navbar.contact"), href: "#contact"},
    ]


    function handleClick(e: React.SyntheticEvent) {
            handleSmoothScrolling(e)
            setIsOpen(false)
    }

    return (
        <header id="navbar"
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
                           onClick={handleClick}>
                            {item.name}
                        </a>
                    ))}
                </nav>

                <div className="hidden md:flex items-center gap-5">
                    <ThemeToggler/>
                    <LanguageToggler/>
                    <Button className="btn-primary"><a href="#contact">Contact</a></Button>
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
                                    onClick={handleClick}
                                    href={item.href}>
                                    {item.name}
                                </a>
                            ))}
                        </nav>

                        <div className="flex items-center justify-center ">
                            <ThemeToggler/>
                            <LanguageToggler/>
                        </div>
                    </SheetContent>
                </Sheet>


            </div>
        </header>
    );
}