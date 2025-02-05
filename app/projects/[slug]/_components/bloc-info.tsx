import { bricolage_grotesk } from "@/app/font";
import { cn } from "@/lib/utils";
import { Project, ProjectCollaborator, ProjectLinks } from "@/types/projects";
import Link from "next/link";

interface BlocInfoProps {
    project: Project;
    type: "links" | "collaborators" | "date";
}

const BlocInfo = ({ project, type }: BlocInfoProps) => {
    return (
        <div className="flex flex-col gap-0.5 text-right">
            <p className="text-neutral-950 text-sm font-medium capitalize">
                {type}
            </p>

            {type === "links" && <LinksList links={project.links} />}
            {type === "date" && (
                <p className="text-neutral-700 font-medium text-sm sm:text-base">
                    {project.year}
                </p>
            )}
            {type === "collaborators" && (
                <CollaboratorsList collaborators={project.collaborators} />
            )}
        </div>
    );
};

function LinksList({ links }: { links: ProjectLinks }) {
    return (
        <div className="flex items-end justify-end gap-1 sm:gap-2">
            {Object.entries(links).map(([key, value], idx) => (
                <div
                    className="flex gap-1 sm:gap-2 justify-end"
                    key={`links::${idx}`}
                >
                    {idx !== 0 && (
                        <span
                            className={cn(
                                "text-sm sm:text-base",
                                bricolage_grotesk.className
                            )}
                        >
                            ·
                        </span>
                    )}
                    <Link
                        key={key}
                        href={value}
                        className="text-neutral-700 font-medium capitalize hover:underline text-sm sm:text-base"
                        target="_blank"
                    >
                        {key}
                    </Link>
                </div>
            ))}
        </div>
    );
}

function CollaboratorsList({
    collaborators,
}: {
    collaborators: ProjectCollaborator[];
}) {
    return collaborators.map((collaborator, idx) => (
        <div className="flex gap-1 sm:gap-2 justify-end" key={`collab::${idx}`}>
            {idx !== 0 && (
                <span className={bricolage_grotesk.className}>·</span>
            )}

            <Link
                href={collaborator.link}
                key={collaborator.nickname}
                className="text-neutral-700 font-medium hover:underline text-sm sm:text-base"
                target="_blank"
            >
                @{collaborator.nickname}
            </Link>
        </div>
    ));
}

export default BlocInfo;
