import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea"
import {Mail, MapPin, Phone} from "lucide-react"

export function ContactSection() {
    return (
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 contact-section text-white">
            <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                            Ready to Launch Your Next Promotional Campaign?
                        </h2>
                        <p className="md:text-xl">
                            Get in touch with our team to discuss your promotional marketing needs. We will help you
                            create a campaign
                            that drives results.
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
                    <div className="space-y-4 bg-white text-black p-6 rounded-lg">
                        <h3 className="text-xl font-bold">Get a Quote</h3>
                        <div className="grid gap-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="first-name" className="text-sm font-medium">
                                        First Name
                                    </label>
                                    <Input id="first-name" placeholder="John"/>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="last-name" className="text-sm font-medium">
                                        Last Name
                                    </label>
                                    <Input id="last-name" placeholder="Doe"/>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium">
                                    Email
                                </label>
                                <Input id="email" type="email" placeholder="john.doe@example.com"/>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="company" className="text-sm font-medium">
                                    Company
                                </label>
                                <Input id="company" placeholder="Your Company"/>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">
                                    Message
                                </label>
                                <Textarea id="message" placeholder="Tell us about your promotional campaign needs"/>
                            </div>
                            <Button className="w-full bg-blue-600 hover:bg-blue-700">Submit Request</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

