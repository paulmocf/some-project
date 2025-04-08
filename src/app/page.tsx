import {Hero} from "@/app/components/sections/hero";
import {Services} from "@/app/components/sections/services";
import {Contact} from "@/app/components/sections/contact";
import {About} from "@/app/components/sections/about";

export default function Home() {
    return (
        <>
            <Hero/>
            <Services/>
            <About/>
            <Contact/>
        </>
    );
}
