import Image, { StaticImageData } from "next/image";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "./ui/tooltip";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";
import { cabinet_grotesk, fraunes } from "@/app/font";

interface ProjectProps {
    project: {
        slug: string;
        title: string;
        images: StaticImageData[];
    };
    size?: 1 | 2 | 3;
}

const columnSpan = {
    1: "col-span-1 aspect-square",
    2: "col-span-2 aspect-[2]",
    3: "col-span-3 aspect-[3]",
};

const Project = ({ project, size }: ProjectProps) => {
    return (
        <div
            key={project.title}
            className={cn(
                `group bg-neutral-100/70 rounded-sm flex flex-col justify-between overflow-hidden hover:bg-neutral-100`,
                size ? columnSpan[size] : null
            )}
        >
            <div className="flex items-center justify-between p-4">
                <p
                    className={cn(
                        "text-neutral-500 inline-flex items-center gap-1.5",
                        fraunes.className
                    )}
                >
                    <span>Project</span>
                    <span className={cabinet_grotesk.className}>·</span>
                    <span>{project.title}</span>
                </p>
                <TooltipProvider>
                    <Tooltip delayDuration={200}>
                        <TooltipTrigger asChild>
                            <Link
                                href={`/projects/${project.slug}`}
                                className="flex items-center justify-center rounded-full text-neutral-400 border border-transparent
                                    size-8 group-hover:bg-white group-hover:border-neutral-200 group-hover:text-neutral-900 transition-colors
                                    cursor-alias"
                            >
                                <ArrowUpRight size={16} weight="bold" />
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent
                            side="left"
                            className={cn(
                                "text-xs bg-neutral-700 text-neutral-50",
                                cabinet_grotesk.className
                            )}
                        >
                            View project
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
            <div
                className="mx-auto w-3/4 overflow-hidden rounded-sm translate-y-6 
                    group-hover:scale-105 transition-transform duration-200"
            >
                <Image
                    src={project.images[0]}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );
};

export default Project;
