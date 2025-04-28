'use server'

import {z} from "zod";
import {Resend} from "resend";
import {getFormSchema} from "@/app/components/sections/components/ContactForm";

export async function sendEmail(values: z.infer<ReturnType<typeof getFormSchema>>) {
    const resendKey = process.env.RESEND_API_KEY;
    const resend = new Resend(resendKey);

    const {error} = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'mocanupaulflorin@gmail.com',
        subject: 'Hello World',
        html: values.message
    });

    return {error};
}