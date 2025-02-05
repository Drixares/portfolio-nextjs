import { bricolage_grotesk } from "@/app/font";
import { cn } from "@/lib/utils";
import { ProjectCard } from "@/types/projects";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "./ui/tooltip";


interface ProjectProps {
    project: ProjectCard;
    size?: keyof typeof columnSpan;
    priority?: boolean;
}

const columnSpan = {
    1: "col-span-1 aspect-square",
    2: "col-span-2 aspect-[2]",
    3: "col-span-3 aspect-[3]",
} as const;

const Project = ({ project, size, priority = false }: ProjectProps) => {
    const containerClasses = cn(
        `group bg-neutral-50 rounded-sm flex flex-col justify-between overflow-hidden`,
        size ? columnSpan[size] : null
    );

    const titleClasses = cn(
        "text-neutral-500 inline-flex items-center gap-1.5",
        bricolage_grotesk.className
    );

    return (
        <div key={project.title} className={containerClasses}>
            <div className="flex items-center justify-between p-4">
                <p className={titleClasses}>
                    <span>Project</span>
                    <span>·</span>
                    <span className="text-sm sm:text-base">
                        {project.title}
                    </span>
                </p>
                <TooltipProvider>
                    <Tooltip delayDuration={200}>
                        <TooltipTrigger asChild>
                            <Link
                                href={`/projects/${project.slug}`}
                                className="flex items-center justify-center rounded-full text-neutral-400 border border-transparent
                                    size-10 group-hover:bg-white group-hover:border-neutral-200 group-hover:text-neutral-900 transition-colors
                                    cursor-alias"
                                aria-label={`View ${project.title} project details`}
                            >
                                <ArrowUpRight size={18} weight="bold" />
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent
                            side="left"
                            className={cn(
                                "text-xs bg-neutral-700 text-neutral-50",
                                bricolage_grotesk.className
                            )}
                        >
                            View project
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
            <div
                role="img"
                aria-label={`Preview image for ${project.title}`}
                className="mx-auto w-3/4 overflow-hidden rounded-sm translate-y-6 
                    group-hover:scale-105 transition-transform duration-200"
            >
                <Image
                    src={project.images[0]}
                    alt={`${project.title} preview`}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                    priority={priority}
                    loading={priority ? undefined : "lazy"}
                    placeholder="blur"
                    blurDataURL={project.images[0].blurDataURL}
                />
            </div>
        </div>
    );
};

export default Project;
