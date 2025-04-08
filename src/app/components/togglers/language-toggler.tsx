"use client"

import {useTranslation} from "react-i18next"
import {Button} from "@/components/ui/button"
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu"
import {Globe} from "lucide-react"

export function LanguageToggler() {
    const { i18n, t } = useTranslation()

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng)
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-9 w-9">
                    <Globe className="h-[1.2rem] w-[1.2rem]" />
                    <span className="sr-only">Switch language</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => changeLanguage("ro")} className={i18n.language === "ro" ? "bg-muted" : ""}>
                    {t("language.switchToRomanian")}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage("en")} className={i18n.language === "en" ? "bg-muted" : ""}>
                    {t("language.switchToEnglish")}
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

