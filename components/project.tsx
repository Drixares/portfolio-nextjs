import { bricolage_grotesk } from "@/app/font";
import { withClassNames } from "@/lib/utils";
import {
	color,
	easing,
	leading,
	radius,
	text,
	transition,
} from "@/styles/tokens.stylex";
import { ProjectCard } from "@/types/projects";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import * as stylex from "@stylexjs/stylex";
import Image from "next/image";
import Link from "next/link";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "./ui/tooltip";

interface ProjectProps {
	project: ProjectCard;
	size?: keyof typeof columnSpan;
	priority?: boolean;
}

const styles = stylex.create({
	card: {
		backgroundColor: color.neutral50,
		borderRadius: radius.sm,
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		overflow: "hidden",
		// StyleX has no descendant selectors, so the former `group-hover:*`
		// utilities are expressed as custom properties toggled on hover and
		// consumed by the children below.
		"--project-link-bg": { default: color.transparent, ":hover": color.white },
		"--project-link-border": {
			default: color.transparent,
			":hover": color.neutral200,
		},
		"--project-link-color": {
			default: color.neutral400,
			":hover": color.neutral900,
		},
		"--project-preview-scale": { default: "1", ":hover": "1.05" },
	},
	header: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		padding: "1rem",
	},
	label: {
		color: color.neutral500,
		display: "inline-flex",
		alignItems: "center",
		gap: "0.375rem",
	},
	title: {
		fontSize: { default: text.sm, "@media (min-width: 640px)": text.base },
		lineHeight: { default: leading.sm, "@media (min-width: 640px)": leading.base },
	},
	link: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: radius.full,
		borderWidth: 1,
		borderStyle: "solid",
		borderColor: "var(--project-link-border)",
		backgroundColor: "var(--project-link-bg)",
		color: "var(--project-link-color)",
		width: "2.5rem",
		height: "2.5rem",
		transitionProperty: transition.colors,
		transitionDuration: "150ms",
		transitionTimingFunction: easing.inOut,
		cursor: "alias",
	},
	tooltip: {
		fontSize: text.xs,
		lineHeight: leading.xs,
		backgroundColor: color.neutral700,
		color: color.neutral50,
	},
	preview: {
		marginInline: "auto",
		width: "75%",
		height: "100%",
		overflow: "hidden",
		borderRadius: radius.sm,
		transform:
			"translateY(1.5rem) scale(var(--project-preview-scale))",
		transitionProperty: transition.transform,
		transitionDuration: "200ms",
		transitionTimingFunction: easing.inOut,
	},
	image: {
		objectFit: "cover",
		width: "100%",
		height: "100%",
	},
});

const columnSpan = stylex.create({
	1: { gridColumn: "span 1 / span 1", aspectRatio: "1 / 1" },
	2: { gridColumn: "span 2 / span 2", aspectRatio: "2" },
	3: { gridColumn: "span 3 / span 3", aspectRatio: "3" },
});

const Project = ({ project, size, priority = false }: ProjectProps) => {
	return (
		<div
			key={project.title}
			{...stylex.props(styles.card, size ? columnSpan[size] : null)}
		>
			<div {...stylex.props(styles.header)}>
				<p
					{...withClassNames(
						stylex.props(styles.label),
						bricolage_grotesk.className,
					)}
				>
					<span>Project</span>
					<span>·</span>
					<span {...stylex.props(styles.title)}>{project.title}</span>
				</p>
				<TooltipProvider>
					<Tooltip delayDuration={200}>
						<TooltipTrigger asChild>
							<Link
								href={`/projects/${project.slug}`}
								{...stylex.props(styles.link)}
								aria-label={`View ${project.title} project details`}
							>
								<ArrowUpRight size={18} weight="bold" />
							</Link>
						</TooltipTrigger>
						<TooltipContent
							side="left"
							style={styles.tooltip}
							className={bricolage_grotesk.className}
						>
							View project
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>
			</div>
			<div
				role="img"
				aria-label={`Image preview of ${project.title}`}
				{...stylex.props(styles.preview)}
			>
				<Image
					src={project.images[0]}
					alt={`${project.title} preview`}
					{...stylex.props(styles.image)}
					priority={priority}
					loading={!priority ? undefined : "lazy"}
					placeholder="blur"
					blurDataURL={project.images[0].blurDataURL}
				/>
			</div>
		</div>
	);
};

export default Project;
