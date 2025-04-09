import {Hero} from "@/app/components/sections/hero";
import {Services} from "@/app/components/sections/services";
import {Contact} from "@/app/components/sections/contact";
import {About} from "@/app/components/sections/about";
import {SectionDivider} from "./components/section-divider";

export default function Home() {
    return (
        <>
            <Hero/>
            {/*<div className="">*/}
            {/*    <SectionDivider type="wave" className="services-section" fillClassName="fill-blue-50 dark:fill-blue-950" />*/}
            {/*</div>*/}
            <Services/>
            <div className="">
                <SectionDivider type="wave" fillClassName="fill-indigo-50 dark:fill-gray-900" />
            </div>
            <About/>
            <div className="">
                <SectionDivider className="contact-section" type="wave" fillClassName="fill-[hsl(222.2,40%,98%)] dark:fill-[hsl(222.2,84%,4.9%)]" />
            </div>
            <Contact/>
        </>
    );
}
