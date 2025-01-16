import Link from "next/link";
import Floating, { FloatingElement } from "../fancy/parallax-floating";
import Image from "next/image";
import Learn404 from "@/app/assets/images/projects/learn404.png";
import AdventCalendly from "@/app/assets/images/projects/advent-calendly.png";
import QuatreDevinci from "@/app/assets/images/projects/404devinci.png";
import { Heading2 } from "../globals/heading2";

export const ProjectsSection = () => {
    return (
        <div className="mx-auto flex justify-center items-center w-3/4 h-[418px] bg-[#F8DFCB]/50 overflow-hidden relative rounded-sm">
            <div className="flex flex-col items-center gap-6 z-40">
                <Heading2 className="italic">projects.</Heading2>
                <Link
                    href="/projects"
                    className="px-6 py-3 rounded-full bg-neutral-950 text-neutral-50"
                >
                    Let&apos;s see !
                </Link>
            </div>
            <Floating>
                <FloatingElement
                    depth={3}
                    className="z-50 top-1/2 left-3 w-72 aspect-video rounded-sm overflow-hidden"
                >
                    <Image src={AdventCalendly} alt="Advent Calendly" />
                </FloatingElement>
                <FloatingElement
                    depth={1.5}
                    className="z-50 top-[10%] left-[70%] w-72 aspect-video rounded-sm overflow-hidden"
                >
                    <Image src={Learn404} alt="Learn 404" />
                </FloatingElement>
                <FloatingElement
                    depth={4.5}
                    className="z-50 top-[60%] left-[60%] w-72 aspect-video rounded-sm overflow-hidden"
                >
                    <Image src={QuatreDevinci} alt="404 devinci" />
                </FloatingElement>
            </Floating>
        </div>
    );
};
