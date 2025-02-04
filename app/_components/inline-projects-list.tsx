import { cn } from "@/lib/utils";
import Project from "../../components/project";
import { Project as ProjectType, ProjectCard } from "@/types/projects";

interface InlineProjectsListProps {
    projects: ProjectType[] | ProjectCard[];
    data: "latest" | "more";
    column?: number;
    className?: string;
}

const InlineProjectsList = ({
    projects,
    data,
    column,
    className,
}: InlineProjectsListProps) => {
    const heading = data === "latest" ? "Latests" : "More projects";

    return (
        <div className="mt-32">
            <p className="uppercase text-neutral-400 text-end mb-2">
                {heading}
            </p>
            <div
                className={cn(
                    "grid grid-cols-3 gap-4",
                    column && `grid-cols-${column}`,
                    className
                )}
            >
                {projects.map((project) => (
                    <Project key={project.slug} project={project} />
                ))}
            </div>
        </div>
    );
};

export default InlineProjectsList;
