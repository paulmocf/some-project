"use client"

import Link from "next/link";
import {Button} from "@/components/ui/button";
import {useState} from "react";
import {ThemeToggler} from "@/app/components/ThemeToggler";
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import {Menu} from "lucide-react";


export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    const navItems = [
        {name: "Home", href: "/"},
        {name: "Services", href: "#services"},
        {name: "About", href: "#about"},
        {name: "Case Studies", href: "#case-studies"},
        {name: "Contact", href: "#contact"},
    ]

    return (
        <header
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
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium transition-colors hover:text-blue-600"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                <div className="hidden md:flex items-center gap-2">
                    <ThemeToggler/>
                    <Button>Get a Quote</Button>
                </div>

                {/* Mobile Navigation */}
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild className="md:hidden">
                        <Button variant="ghost" size="icon" aria-label="Menu">
                            <Menu className="h-6 w-6"/>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                        <nav className="flex flex-col gap-4 mt-8">
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
                            <div className="flex items-center mt-4">
                                <ThemeToggler/>
                                <span className="ml-2 text-sm">Toggle theme</span>
                            </div>
                            <Button className="mt-4">Get a Quote</Button>
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    )
}