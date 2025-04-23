"use client"

import {Mail, MapPin, Phone} from "lucide-react"
import {useTranslation} from "react-i18next";
import ContactForm from "@/app/components/sections/components/ContactForm";

export function Contact() {
    const { t } = useTranslation()

    return (
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 contact-section text-white">
            <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                            {t("contact.title")}
                        </h2>
                        <p className="md:text-xl">
                            {t("contact.description")}
                        </p>
                        <div className="space-y-4 pt-4">
                            <div className="flex items-center gap-2">
                                <Mail className="h-5 w-5"/>
                                <span>contact@firmax.com</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone className="h-5 w-5"/>
                                <span>+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="h-5 w-5"/>
                                <span>123 Marketing Street, New York, NY 10001</span>
                            </div>
                        </div>
                    </div>
                    <ContactForm/>
                </div>
            </div>
        </section>
    )
}

