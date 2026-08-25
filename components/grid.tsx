import { PAGES } from "@/constants/page";
import { PROJECTS_WITH_INFOS } from "@/constants/projects";
import { color, leading, radius, text } from "@/styles/tokens.stylex";
import * as stylex from "@stylexjs/stylex";
import Link from "next/link";
import Project from "./project";
import { Wheel5 } from "./shapes/wheel";

const styles = stylex.create({
	grid: {
		marginTop: "4rem",
		width: "100%",
		display: "grid",
		gap: "1rem",
	},
	responsiveColumns: {
		gridTemplateColumns: {
			default: "repeat(1, minmax(0, 1fr))",
			"@media (min-width: 640px) and (max-width: 1023.98px)": "repeat(2, minmax(0, 1fr))",
			"@media (min-width: 1024px)": "repeat(3, minmax(0, 1fr))",
		},
	},
	threeColumns: {
		gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
	},
	cta: {
		zIndex: 20,
		position: "relative",
		width: "100%",
		height: "18rem",
		backgroundColor: color.sand50,
		borderRadius: radius.sm,
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		gap: "1.25rem",
		overflow: "hidden",
	},
	ctaTitle: {
		fontSize: text.xl4,
		lineHeight: leading.xl4,
	},
	ctaLink: {
		paddingInline: "1.5rem",
		paddingBlock: "0.75rem",
		borderRadius: radius.full,
		backgroundColor: color.neutral950,
		color: color.neutral50,
	},
	wheel: {
		position: "absolute",
		top: 0,
		right: 0,
		transform: "translateY(-33.333333%)",
		zIndex: -10,
		width: "8rem",
	},
});

export const ProjectsGrid = () => {
	return (
		<div {...stylex.props(styles.grid, styles.responsiveColumns)}>
			{PROJECTS_WITH_INFOS.map((project) => (
				<Project project={project} key={project.slug} />
			))}
			{/* <div {...stylex.props(styles.cta)}>
                <h2 {...stylex.props(styles.ctaTitle)}>Let&apos;s work together</h2>
                <Link href={PAGES.CONTACT} {...stylex.props(styles.ctaLink)}>
                    Contact me
                </Link>
                <Wheel5 style={styles.wheel} />
            </div> */}
		</div>
	);
};

export const WritingsGrid = () => {
	return (
		<div {...stylex.props(styles.grid, styles.threeColumns)}>
			{PROJECTS_WITH_INFOS.map((project) => (
				<Project project={project} key={project.slug} />
			))}
			<div {...stylex.props(styles.cta)}>
				<h2 {...stylex.props(styles.ctaTitle)}>Let&apos;s work together</h2>
				<Link href={PAGES.CONTACT} {...stylex.props(styles.ctaLink)}>
					Contact me
				</Link>
				<Wheel5 style={styles.wheel} />
			</div>
		</div>
	);
};
