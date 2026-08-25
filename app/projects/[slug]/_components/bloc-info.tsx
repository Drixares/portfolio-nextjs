import { bricolage_grotesk } from "@/app/font";
import { withClassNames } from "@/lib/utils";
import { color, font, leading, text } from "@/styles/tokens.stylex";
import { Project, ProjectCollaborator, ProjectLinks } from "@/types/projects";
import * as stylex from "@stylexjs/stylex";
import Link from "next/link";

interface BlocInfoProps {
    project: Project;
    type: "links" | "collaborators" | "date";
}

const styles = stylex.create({
    bloc: {
        display: "flex",
        flexDirection: "column",
        gap: "0.125rem",
        textAlign: "right",
    },
    label: {
        color: color.neutral950,
        fontSize: text.sm,
        lineHeight: leading.sm,
        fontWeight: font.medium,
        textTransform: "capitalize",
    },
    value: {
        color: color.neutral700,
        fontWeight: font.medium,
        fontSize: { default: text.sm, "@media (min-width: 640px)": text.base },
        lineHeight: { default: leading.sm, "@media (min-width: 640px)": leading.base },
    },
    capitalize: {
        textTransform: "capitalize",
    },
    hoverUnderline: {
        textDecorationLine: { default: "none", ":hover": "underline" },
    },
    linksRow: {
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "flex-end",
        gap: { default: "0.25rem", "@media (min-width: 640px)": "0.5rem" },
    },
    entry: {
        display: "flex",
        gap: { default: "0.25rem", "@media (min-width: 640px)": "0.5rem" },
        justifyContent: "flex-end",
    },
    separator: {
        fontSize: { default: text.sm, "@media (min-width: 640px)": text.base },
        lineHeight: { default: leading.sm, "@media (min-width: 640px)": leading.base },
    },
});

const BlocInfo = ({ project, type }: BlocInfoProps) => {
    return (
        <div {...stylex.props(styles.bloc)}>
            <p {...stylex.props(styles.label)}>{type}</p>

            {type === "links" && <LinksList links={project.links} />}
            {type === "date" && (
                <p {...stylex.props(styles.value)}>{project.year}</p>
            )}
            {type === "collaborators" && (
                <CollaboratorsList collaborators={project.collaborators} />
            )}
        </div>
    );
};

function LinksList({ links }: { links: ProjectLinks }) {
    return (
        <div {...stylex.props(styles.linksRow)}>
            {Object.entries(links).map(([key, value], idx) => (
                <div {...stylex.props(styles.entry)} key={`links::${idx}`}>
                    {idx !== 0 && (
                        <span
                            {...withClassNames(
                                stylex.props(styles.separator),
                                bricolage_grotesk.className
                            )}
                        >
                            ·
                        </span>
                    )}
                    <Link
                        key={key}
                        href={value}
                        {...stylex.props(
                            styles.value,
                            styles.capitalize,
                            styles.hoverUnderline
                        )}
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
        <div {...stylex.props(styles.entry)} key={`collab::${idx}`}>
            {idx !== 0 && (
                <span className={bricolage_grotesk.className}>·</span>
            )}

            <Link
                href={collaborator.link}
                key={collaborator.nickname}
                {...stylex.props(styles.value, styles.hoverUnderline)}
                target="_blank"
            >
                @{collaborator.nickname}
            </Link>
        </div>
    ));
}

export default BlocInfo;
