"use client"

import {useTranslation} from "react-i18next";
import React from "react";
import {Button} from "@/components/ui/button";
import {ArrowRight} from "lucide-react";
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
                        <Button size="lg"
                                className="btn-primary">
                            <a href="#contact" onClick={handleSmoothScrolling}>{t("hero.startCampaign")}</a>
                            <ArrowRight className="ml-2 h-4 w-4"/>
                        </Button>
                        <Button variant="outline" size="lg">
                            <a href="#about" onClick={handleSmoothScrolling}>
                                {t("hero.learnMore")}
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}