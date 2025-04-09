"use client"

import * as React from "react"
import {useEffect, useState} from "react"
import {Moon, Sun} from "lucide-react"
import {useTheme} from "next-themes"

import {Button} from "@/components/ui/button"
import {AnimatePresence, motion} from "framer-motion";

export function ThemeToggler() {
    const {theme, setTheme} = useTheme();
    const [mounted, setMounted] = useState(false);

    // Wait until after mount to show UI
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null; // Prevent hydration mismatch

    const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

    return (
        <Button
            variant="ghost"
            color="red"
            size="icon"
            onClick={toggleTheme}
            className="relative overflow-hidden"
        >
            <AnimatePresence mode="wait" initial={false}>
                {theme === "dark" ? (
                    <motion.span
                        key="sun"
                        initial={{rotate: -90, scale: 0, opacity: 0}}
                        animate={{rotate: 0, scale: 1, opacity: 1}}
                        exit={{rotate: 90, scale: 0, opacity: 0}}
                        transition={{type: "spring", duration: 0.2}}
                    >
                        <Sun className="h-[1.2rem] w-[1.2rem]"/>
                    </motion.span>
                ) : (
                    <motion.span
                        key="moon"
                        initial={{rotate: 90, scale: 0, opacity: 0}}
                        animate={{rotate: 0, scale: 1, opacity: 1}}
                        exit={{rotate: -90, scale: 0, opacity: 0}}
                        transition={{type: "spring", duration: 0.2}}
                    >
                        <Moon className="h-[1.2rem] w-[1.2rem]"/>
                    </motion.span>
                )}
            </AnimatePresence>
            <span className="sr-only">Toggle theme</span>
        </Button>
    );
}