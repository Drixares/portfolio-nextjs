import { cabinet_grotesk } from "@/app/font";
import { Project } from "@/types/projects";
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

            <div className="flex items-center justify-end gap-2">
                {type === "links" &&
                    Object.entries(project.links).map(([key, value], idx) => (
                        <div
                            className="flex gap-2 justify-end"
                            key={`links::${idx}`}
                        >
                            {idx !== 0 && (
                                <span className={cabinet_grotesk.className}>
                                    ·
                                </span>
                            )}
                            <Link
                                key={key}
                                href={value}
                                className="text-neutral-700 font-medium capitalize hover:underline"
                                target="_blank"
                            >
                                {key}
                            </Link>
                        </div>
                    ))}
            </div>
            {type === "date" && (
                <p className="text-neutral-700 font-medium">{project.year}</p>
            )}
            {type === "collaborators" &&
                project.collaborators.map((collaborator, idx) => (
                    <div
                        className="flex gap-2 justify-end"
                        key={`collab::${idx}`}
                    >
                        {idx !== 0 && (
                            <span className={cabinet_grotesk.className}>·</span>
                        )}

                        <Link
                            href={collaborator.link}
                            key={collaborator.nickname}
                            className="text-neutral-700 font-medium hover:underline"
                            target="_blank"
                        >
                            @{collaborator.nickname}
                        </Link>
                    </div>
                ))}
        </div>
    );
};

export default BlocInfo;
