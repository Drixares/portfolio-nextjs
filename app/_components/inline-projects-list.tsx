import Project from "../../components/project";
import { Project as ProjectType, ProjectCard } from "@/types/projects";

interface InlineProjectsListProps {
    projects: ProjectType[] | ProjectCard[];
    data: "latest" | "related";
}

const InlineProjectsList = ({ projects, data }: InlineProjectsListProps) => {
    const heading = data === "latest" ? "Latests" : "Related projects";

    return (
        <div className="mt-32">
            <p className="uppercase text-neutral-400 text-end mb-2">
                {heading}
            </p>
            <div className="grid grid-cols-3 gap-4">
                {projects.map((project) => (
                    <Project key={project.slug} project={project} />
                ))}
            </div>
        </div>
    );
};

export default InlineProjectsList;
