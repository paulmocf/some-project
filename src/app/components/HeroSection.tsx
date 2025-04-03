import {Button} from "@/components/ui/button";
import {ArrowRight} from "lucide-react";

export function HeroSection() {
    return (
        <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48" id="home">
            <div className="absolute inset-0 hero-gradient z-[-1]"></div>
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                            We Create Engaging Promotional Campaigns!
                        </h1>
                        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                            Firma X specializes in designing and managing promotional marketing campaigns that drive results. From
                            concept to execution, we handle every aspect of your promotional needs.
                        </p>
                    </div>
                    <div className="space-x-4">
                        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
                            Start Your Campaign <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="lg">
                            Learn More
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}