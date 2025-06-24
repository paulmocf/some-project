"use client"

import Image from "next/image"
import {CheckCircle} from "lucide-react"
import {useTranslation} from "react-i18next";

export function About() {
    const { t } = useTranslation();

    const benefits = [
        t("about.benefits.expertise"),
        t("about.benefits.campaigns"),
        t("about.benefits.creativeTeam"),
        t("about.benefits.techIntegration"),
        t("about.benefits.campaignManagement"),
        t("about.benefits.support"),
    ]

    return (
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                    <div className="space-y-4">
                        <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">{t("about.title")}</div>
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-300 dark:to-indigo-300">
                            {t("about.subtitle")}
                        </h2>
                        <div className="h-1 w-20 my-4 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full"></div>
                        <p className="text-muted-foreground md:text-xl">
                            {t("about.description")}
                        </p>
                        <div className="grid grid-cols-1 gap-2 pt-4 md:grid-cols-2">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-blue-600" />
                                    <span className="text-sm">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative w-full max-w-md h-[250px]">
                        <Image
                            src="/window.svg"
                            alt="Becoming Digital team working on promotional campaigns"
                            fill
                            className="object-contain rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

