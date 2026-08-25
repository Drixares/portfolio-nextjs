import InlineProjectsList from "@/app/_components/inline-projects-list";
import Badge from "@/components/badge";
import Footer from "@/components/footer";
import Heading1 from "@/components/heading1";
import { PROJECTS_WITH_INFOS } from "@/constants/projects";
import { getRelatedProjects } from "@/lib/utils";
import { color, leading, text } from "@/styles/tokens.stylex";
import * as stylex from "@stylexjs/stylex";
import { notFound } from "next/navigation";
import BlocInfo from "./_components/bloc-info";
import ImagesList from "./_components/images-list";
import StackList from "./_components/stack-list";

export function generateStaticParams() {
	return PROJECTS_WITH_INFOS.map((project) => ({
		slug: project.slug,
	}));
}

const styles = stylex.create({
	page: {
		display: "flex",
		flexDirection: "column",
		rowGap: "16rem",
		marginInline: "auto",
		maxWidth: "80rem",
		width: "100%",
		paddingInline: "1.25rem",
	},
	main: {
		marginTop: "4rem",
	},
	intro: {
		display: "flex",
		flexDirection: "column",
		rowGap: "2rem",
	},
	titleRow: {
		display: "flex",
		alignItems: "center",
		rowGap: "1rem",
		columnGap: "2rem",
		flexWrap: "wrap",
	},
	title: {
		textTransform: "none",
		flexShrink: 0,
	},
	description: {
		fontSize: { default: null, "@media (min-width: 768px)": text.lg },
		// `leading-6` set 1.5rem, but `md:text-lg` brought its own 1.75rem
		// line-height and won from 768px up.
		lineHeight: { default: leading.base, "@media (min-width: 768px)": leading.lg },
		color: color.neutral600,
		maxWidth: "42rem",
	},
	meta: {
		display: "flex",
		justifyContent: "flex-end",
		columnGap: { default: "0.75rem", "@media (min-width: 640px)": "2rem" },
		rowGap: "1rem",
		flexWrap: "wrap",
		paddingTop: "4rem",
		paddingBottom: "1.5rem",
	},
	divider: {
		height: "2.75rem",
		width: "1px",
		backgroundColor: color.neutral300,
	},
	relatedList: {
		// The page container already spaces its children; the list's own top
		// margin would stack on top of it (Tailwind's `space-y-64` won over
		// `mt-32` here, so the gap was 16rem, not 16rem + 8rem).
		marginTop: 0,
	},
	relatedGrid: {
		gridTemplateColumns: {
			default: "repeat(1, minmax(0, 1fr))",
			"@media (min-width: 640px)": "repeat(2, minmax(0, 1fr))",
		},
	},
});

const ProjectPage = async ({
	params,
}: {
	params: Promise<{ slug: string }>;
}) => {
	const slug = (await params).slug;
	const project = PROJECTS_WITH_INFOS.find((project) => project.slug === slug);

	if (!project) return notFound();

	const relatedProjects = getRelatedProjects(slug);

	return (
		<div {...stylex.props(styles.page)}>
			<div {...stylex.props(styles.main)}>
				<div {...stylex.props(styles.intro)}>
					<div {...stylex.props(styles.titleRow)}>
						<Heading1 style={styles.title}>{project.title}</Heading1>
						<Badge>{project.service}</Badge>
					</div>
					<p {...stylex.props(styles.description)}>
						{project.description || "Aucune description."}
					</p>
					<StackList stack={project.stack} />
				</div>
				<div {...stylex.props(styles.meta)}>
					<BlocInfo project={project} type="links" />
					<div {...stylex.props(styles.divider)} />
					<BlocInfo project={project} type="date" />
					{project.collaborators.length > 0 && (
						<>
							<div {...stylex.props(styles.divider)} />
							<BlocInfo project={project} type="collaborators" />
						</>
					)}
				</div>
				<ImagesList images={project.images} />
			</div>
			<InlineProjectsList
				data="more"
				projects={relatedProjects}
				style={styles.relatedList}
				gridStyle={styles.relatedGrid}
			/>
			<Footer />
		</div>
	);
};

export default ProjectPage;
