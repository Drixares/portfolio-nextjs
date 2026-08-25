import Project from "@/components/project";
import { color } from "@/styles/tokens.stylex";
import { Project as ProjectType, ProjectCard } from "@/types/projects";
import * as stylex from "@stylexjs/stylex";

interface InlineProjectsListProps {
	projects: ProjectType[] | ProjectCard[];
	data: "latest" | "more";
	/** Overrides for the section wrapper (spacing). */
	style?: stylex.StyleXStyles;
	/** Grid overrides — most callers only need to set `gridTemplateColumns`. */
	gridStyle?: stylex.StyleXStyles;
}

const styles = stylex.create({
	wrapper: {
		marginTop: "8rem",
	},
	heading: {
		textTransform: "uppercase",
		color: color.neutral400,
		textAlign: "end",
		marginBottom: "0.5rem",
	},
	grid: {
		display: "grid",
		gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
		gap: "1rem",
	},
});

const InlineProjectsList = ({
	projects,
	data,
	style,
	gridStyle,
}: InlineProjectsListProps) => {
	const heading = data === "latest" ? "Latests" : "More projects";

	return (
		<div {...stylex.props(styles.wrapper, style)}>
			<p {...stylex.props(styles.heading)}>{heading}</p>
			<div {...stylex.props(styles.grid, gridStyle)}>
				{projects.map((project) => (
					<Project key={project.slug} project={project} />
				))}
			</div>
		</div>
	);
};

export default InlineProjectsList;
