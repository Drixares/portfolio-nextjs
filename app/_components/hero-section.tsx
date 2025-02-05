import InlineProjectsList from "@/app/_components/inline-projects-list";
import { latestsProjects } from "@/constants/projects";
import { cn } from "@/lib/utils";
import Hoverline from "../../components/hoverline";
import { bricolage_grotesk } from "../font";

const HeroSection = () => {
    return (
        <div className="mt-16 md:mt-32 mx-auto max-w-screen-2xl w-full px-5 z-30 relative">
            <div className="space-y-5">
                <h2 className="sm:text-lg lg:text-xl font-medium text-neutral-600">
                    Hi, I&apos;m Mattéo Marchelli.
                </h2>
                <h1
                    className={cn(
                        "font-semibold text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-neutral-950",
                        bricolage_grotesk.className
                    )}
                >
                    <p>A fullstack developer that</p>
                    <p>
                        builds good{" "}
                        <span className="relative z-20 leading-tight">
                            experiences
                            <Hoverline />
                        </span>
                    </p>
                </h1>
            </div>
            <InlineProjectsList
                data="latest"
                projects={latestsProjects}
                className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            />
        </div>
    );
};

export default HeroSection;
