"use client"

import * as React from "react"
import {Moon, Sun} from "lucide-react"
import {useTheme} from "next-themes"

import {Button} from "@/components/ui/button"

export function ThemeToggler() {
    const {theme, setTheme} = useTheme()

    return (
        <Button variant="ghost" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === 'dark' ? <><Sun
                    className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"/>
                    <span className="text-sm flex md:hidden">Light Mode</span> </>
                : <><Moon
                    className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0"/>
                    <span className="text-sm flex md:hidden">Dark Mode</span>
                </>
            }
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}
