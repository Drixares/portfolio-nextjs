import { allProjects } from "@/constants/projects";
import Project from "./project";
import Link from "next/link";
import { PAGES } from "@/constants/page";
import { Wheel5 } from "./shapes/wheel";

export const ProjectsGrid = () => {
    return (
        <div className="mt-16 w-full grid grid-cols-3 gap-4">
            {allProjects.map((project) => (
                <Project project={project} key={project.slug} />
            ))}
            {/* <div className="z-20 relative w-full h-72 bg-[#F8DFCB]/50 rounded-sm flex flex-col justify-center items-center gap-5 overflow-hidden">
                <h2 className="text-4xl">Let&apos;s work together</h2>
                <Link
                    href={PAGES.CONTACT}
                    className="px-6 py-3 rounded-full bg-neutral-950 text-neutral-50"
                >
                    Contact me
                </Link>
                <Wheel5 className="absolute top-0 right-0  -translate-y-1/3 -z-10  w-32" />
            </div> */}
        </div>
    );
};

export const WritingsGrid = () => {
    return (
        <div className="mt-16 w-full grid grid-cols-3 gap-4">
            {allProjects.map((project) => (
                <Project project={project} key={project.slug} />
            ))}
            <div className="z-20 relative w-full h-72 bg-[#F8DFCB]/50 rounded-sm flex flex-col justify-center items-center gap-5 overflow-hidden">
                <h2 className="text-4xl">Let&apos;s work together</h2>
                <Link
                    href={PAGES.CONTACT}
                    className="px-6 py-3 rounded-full bg-neutral-950 text-neutral-50"
                >
                    Contact me
                </Link>
                <Wheel5 className="absolute top-0 right-0  -translate-y-1/3 -z-10  w-32" />
            </div>
        </div>
    );
};
