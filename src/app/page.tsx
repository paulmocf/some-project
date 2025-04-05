import {HeroSection} from "@/app/components/HeroSection";
import {ServicesSection} from "@/app/components/ServicesSection";
import {ContactSection} from "@/app/components/contact";
import {AboutSection} from "@/app/components/about";

export default function Home() {
    return (
        <>
            <HeroSection/>
            <ServicesSection/>
            <AboutSection/>
            <ContactSection/>
        </>
    );
}
