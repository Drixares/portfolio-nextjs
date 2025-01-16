import { latestsProjects } from "@/constants/projects";
import Project from "../project";

const LatestProjects = () => {
    return (
        <div className="mt-32">
            <p className="uppercase text-neutral-400 text-end mb-2">Latests</p>
            <div className="grid grid-cols-3 gap-2">
                {latestsProjects.map((project) => (
                    <Project key={project.slug} project={project} />
                ))}
            </div>
        </div>
    );
};

export default LatestProjects;
