"use client"

import {Award, BarChart4, Code, Gift, Megaphone, ShieldCheck} from "lucide-react"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import {useTranslation} from "react-i18next";

export function Services() {
    const {t} = useTranslation()

    const services = [
        {
            icon: <Megaphone className="h-10 w-10 text-blue-600"/>,
            title: t("services.items.campaignDesign.title"),
            description: t("services.items.campaignDesign.description"),
        },
        {
            icon: <Code className="h-10 w-10 text-blue-600"/>,
            title: t("services.items.promoWebsites.title"),
            description: t("services.items.promoWebsites.description"),
        },
        {
            icon: <ShieldCheck className="h-10 w-10 text-blue-600"/>,
            title: t("services.items.validation.title"),
            description: t("services.items.validation.description"),
        },
        {
            icon: <Gift className="h-10 w-10 text-blue-600"/>,
            title: t("services.items.prizeManagement.title"),
            description: t("services.items.prizeManagement.description"),
        },
        {
            icon: <BarChart4 className="h-10 w-10 text-blue-600"/>,
            title: t("services.items.analytics.title"),
            description: t("services.items.analytics.description"),
        },
        {
            icon: <Award className="h-10 w-10 text-blue-600"/>,
            title: t("services.items.compliance.title"),
            description: t("services.items.compliance.description"),
        },
    ]

    return (
        <div id="services">
            <section className="w-full py-12 md:py-24 lg:py-32 services-section">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-300 dark:to-indigo-300">
                                {t("services.title")}
                            </h2>
                            <div className="h-1 w-20 mx-auto my-4 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full"></div>
                            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                                {t("services.description")}
                            </p>
                        </div>
                    </div>
                    <div className="mx-auto grid gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
                        {services.map((service, index) => (
                            <Card key={index} className="card">
                                <CardHeader>
                                    <div
                                        className="mb-2 p-3 rounded-full bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 inline-flex">
                                        {service.icon}
                                    </div>
                                    <CardTitle>{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base">{service.description}</CardDescription>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

