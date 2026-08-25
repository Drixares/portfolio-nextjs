import { PROJECTS_WITH_INFOS } from "@/constants/projects";
import { ProjectCard } from "@/types/projects";

type StyleXProps = ReturnType<typeof import("@stylexjs/stylex").props>;

/**
 * Merges the output of `stylex.props()` with plain class names that come from
 * outside StyleX — `next/font` in particular, which hands us a class rather
 * than style values we could express in `stylex.create`.
 */
export function withClassNames(
	props: StyleXProps,
	...classNames: Array<string | false | null | undefined>
) {
	const merged = [...classNames, props.className].filter(Boolean).join(" ");
	return { ...props, className: merged || undefined };
}

// Helper function to get related projects for a given project
export const getRelatedProjects = (projectSlug: string): ProjectCard[] => {
	const project = PROJECTS_WITH_INFOS.find(
		(project) => project.slug === projectSlug,
	);
	return project?.related || [];
};
