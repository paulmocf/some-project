'use server'

import {z} from "zod";
import {Resend} from "resend";
import {getFormSchema} from "@/app/components/sections/components/ContactForm";

export async function sendEmail(values: z.infer<ReturnType<typeof getFormSchema>>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)

    const resendKey = process.env.RESEND_API_KEY;

    const resend = new Resend(resendKey);

    await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'mocanupaulflorin@gmail.com',
        subject: 'Hello World',
        html: values.message
    });

}