"use client"

import {useTranslation} from "react-i18next";
import React from "react";
import {ArrowDown} from "lucide-react";
import handleSmoothScrolling from "@/lib/handleSmoothScrolling";

export function Hero() {
    const {t} = useTranslation()
    return (
        <section id="hero" className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48">
            <div className="absolute inset-0 hero-gradient z-[-1]"></div>
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center space-y-6 text-center">
                    <div className="space-y-2 mb-2">
                        <h1 className="leading-[1.2] pb-2 text-4xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-300 dark:to-indigo-300">
                            {t("hero.title")}
                        </h1>
                        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                            {t("hero.description")}
                        </p>
                    </div>
                    <div className="space-x-4">
                        <a href="#contact"
                           onClick={handleSmoothScrolling}
                           className="btn-primary font-bold inline-flex items-center px-6 py-2.5 text-sm rounded-md text-white dark:text-black"
                        >
                            {t("hero.startCampaign")}
                            <ArrowDown className="ml-2 h-4 w-4"/>
                        </a>
                        <a href="#about"
                           onClick={handleSmoothScrolling}
                           className="px-6 py-2.5  inline-flex items-center text-sm font-bold rounded-md border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground"
                        >
                            {t("hero.learnMore")}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}