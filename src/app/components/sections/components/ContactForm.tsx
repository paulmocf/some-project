"use client"

import {z} from "zod"

import {Button} from "@/components/ui/button"
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {useTranslation} from "react-i18next";
import {useState} from "react";
import {toast, Toaster} from "react-hot-toast";
import {sendEmail} from "@/app/components/sections/components/sendEmail";
import {Loader2} from "lucide-react";


// 2. Define a submit handler.

export const getFormSchema = (t: (key: string) => string) => {
    return z.object({
        firstName: z.string()
            .min(2, {message: t("contact.form.zod-errors.firstName.min")})
            .max(255, {message: t("contact.form.zod-errors.firstName.max")}),
        lastName: z.string()
            .min(2, {message: t("contact.form.zod-errors.lastName.min")})
            .max(255, {message: t("contact.form.zod-errors.lastName.min")}),
        email: z.string()
            .email({message: t("contact.form.zod-errors.email.min")})
            .max(255, {message: t("contact.form.zod-errors.email.min")}),
        company: z.string()
            .max(255, {message: t("contact.form.zod-errors.company.min")})
            .optional(),
        message: z.string()
            .min(10, {message: t("contact.form.zod-errors.message.min")})
            .max(1000, {message: t("contact.form.zod-errors.message.min")}),
    })
}


export default function ContactForm() {
    const {t} = useTranslation()
    const [isLoading, setIsLoading] = useState(false);

    // 1. Define your form.
    const form = useForm<z.infer<ReturnType<typeof getFormSchema>>>({
        resolver: zodResolver(getFormSchema(t)),
        mode: "onChange",
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            company: "",
            message: "",
        },
    })

    async function submitForm(values: z.infer<ReturnType<typeof getFormSchema>>) {
        setIsLoading(true);
        const {error} = await sendEmail(values)
        form.reset();

        if (error) {
            toast.error(t("contact.form.submitted.error"))
        } else {
            toast.success(t("contact.form.submitted.success"))
        }
        setIsLoading(false)
    }

    return (
        <div className="space-y-4 bg-white text-black p-6 rounded-lg">
            <h3 className="text-xl font-bold">{t("contact.form.title")}</h3>
            <div className="grid gap-4">
                <Toaster position="bottom-right"/>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(submitForm)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="firstName"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>{t("contact.form.firstName")}</FormLabel>
                                    <FormControl>
                                        <Input placeholder={t("contact.form.placeholders.firstName")} {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="lastName"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>{t("contact.form.lastName")}</FormLabel>
                                    <FormControl>
                                        <Input placeholder={t("contact.form.placeholders.lastName")} {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>{t("contact.form.email")}</FormLabel>
                                    <FormControl>
                                        <Input placeholder={t("contact.form.placeholders.email")} {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="company"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>{t("contact.form.company")}</FormLabel>
                                    <FormControl>
                                        <Input placeholder={t("contact.form.placeholders.company")} {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="message"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>{t("contact.form.message")}</FormLabel>
                                    <FormControl>
                                        <Input placeholder={t("contact.form.placeholders.message")} {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <Button className="bg-blue-600 hover:bg-blue-700"
                                disabled={!form.formState.isValid || isLoading}
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin"/>
                                    {t("contact.form.submitted.button")}
                                </>
                            ) : t("contact.form.submit")}
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    )
}
