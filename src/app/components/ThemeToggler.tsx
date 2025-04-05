"use client"

import * as React from "react"
import {useTheme} from "next-themes"
import {DarkModeSwitch} from "react-toggle-dark-mode";

export function ThemeToggler() {
    const {theme, setTheme} = useTheme()

    const toggleDarkMode = (checked: boolean) => {
        setTheme(theme === "dark" ? "light" : "dark")
    };

    return (
        <DarkModeSwitch
            checked={theme==='dark'}
            onChange={toggleDarkMode}
            className="items-center"
        />

    )
}
