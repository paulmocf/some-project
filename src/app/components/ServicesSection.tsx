import {Award, BarChart4, Code, Gift, Megaphone, ShieldCheck} from "lucide-react"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"

export function ServicesSection() {
    const services = [
        {
            icon: <Megaphone className="h-10 w-10 text-blue-600"/>,
            title: "Campaign Design",
            description:
                "Strategic planning and creative design of promotional campaigns tailored to your brand and objectives.",
        },
        {
            icon: <Code className="h-10 w-10 text-blue-600"/>,
            title: "Promo Websites",
            description: "Custom-built websites for promo code submissions, user registrations, and campaign participation.",
        },
        {
            icon: <ShieldCheck className="h-10 w-10 text-blue-600"/>,
            title: "Validation & Verification",
            description: "Secure systems for validating promo codes from receipts or product packaging.",
        },
        {
            icon: <Gift className="h-10 w-10 text-blue-600"/>,
            title: "Prize Management",
            description: "End-to-end prize fulfillment, from winner selection to delivery logistics.",
        },
        {
            icon: <BarChart4 className="h-10 w-10 text-blue-600"/>,
            title: "Analytics & Reporting",
            description: "Comprehensive campaign analytics and performance reporting to measure ROI.",
        },
        {
            icon: <Award className="h-10 w-10 text-blue-600"/>,
            title: "Compliance Management",
            description: "Ensuring all promotional activities comply with relevant laws and regulations.",
        },
    ]

    return (
        <div id="services">
            <section className="w-full py-12 md:py-24 lg:py-32 services-section">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our
                                Services</h2>
                            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                                We offer a complete suite of promotional marketing solutions to help your brand stand
                                out.
                            </p>
                        </div>
                    </div>
                    <div className="mx-auto grid gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
                        {services.map((service, index) => (
                            <Card key={index} className="transition-all hover:shadow-lg">
                                <CardHeader>
                                    <div className="mb-2">{service.icon}</div>
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

