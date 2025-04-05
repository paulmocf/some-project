import Image from "next/image"
import { CheckCircle } from "lucide-react"

export function AboutSection() {
    const benefits = [
        "10+ years of promotional marketing expertise",
        "Successful campaigns for over 200 brands",
        "Award-winning creative team",
        "Seamless technology integration",
        "Comprehensive campaign management",
        "Dedicated support throughout your campaign",
    ]

    return (
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                    <div className="space-y-4">
                        <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">About Firma X</div>
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                            Your Partner in Promotional Excellence
                        </h2>
                        <p className="text-muted-foreground md:text-xl">
                            Firma X is a leading promotional marketing agency specializing in creating engaging campaigns that drive
                            customer participation and brand loyalty. We combine creative strategy with technical expertise to deliver
                            seamless promotional experiences.
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
                    <div className="flex justify-center">
                        <Image
                            src="/window.svg?height=400&width=600"
                            alt="Firma X team working on promotional campaigns"
                            width={600}
                            height={400}
                            className="rounded-lg object-cover shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

