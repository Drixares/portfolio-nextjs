import InlineProjectsList from "@/app/_components/inline-projects-list";
import Hoverline from "@/components/hoverline";
import { PROJECTS } from "@/constants/projects";
import { withClassNames } from "@/lib/utils";
import { color, font, leading, text } from "@/styles/tokens.stylex";
import * as stylex from "@stylexjs/stylex";
import { bricolage_grotesk } from "../font";

const styles = stylex.create({
	section: {
		marginTop: { default: "4rem", "@media (min-width: 768px)": "8rem" },
		marginInline: "auto",
		maxWidth: "80rem",
		width: "100%",
		paddingInline: "1.25rem",
		zIndex: 30,
		position: "relative",
	},
	intro: {
		display: "flex",
		flexDirection: "column",
		rowGap: "1.25rem",
	},
	kicker: {
		fontSize: { default: null, "@media (min-width: 640px) and (max-width: 1023.98px)": text.lg, "@media (min-width: 1024px)": text.xl },
		lineHeight: { default: null, "@media (min-width: 640px) and (max-width: 1023.98px)": leading.lg, "@media (min-width: 1024px)": leading.xl },
		fontWeight: font.medium,
		color: color.neutral600,
	},
	title: {
		fontWeight: font.semibold,
		fontSize: {
			default: text.xl3,
			"@media (min-width: 640px) and (max-width: 767.98px)": text.xl5,
			"@media (min-width: 768px) and (max-width: 1023.98px)": text.xl6,
			"@media (min-width: 1024px)": text.xl7,
		},
		lineHeight: { default: leading.xl3, "@media (min-width: 640px)": leading.none },
		color: color.neutral950,
	},
	break: {
		display: { default: "none", "@media (min-width: 640px)": "block" },
	},
	highlight: {
		position: "relative",
		zIndex: 20,
		lineHeight: leading.tight,
	},
	list: {
		gridTemplateColumns: {
			default: "repeat(1, minmax(0, 1fr))",
			"@media (min-width: 640px) and (max-width: 1023.98px)": "repeat(2, minmax(0, 1fr))",
			"@media (min-width: 1024px)": "repeat(3, minmax(0, 1fr))",
		},
	},
});

const HeroSection = () => {
	const featuredProjects = PROJECTS.slice(0, 3);

	return (
		<div {...stylex.props(styles.section)}>
			<div {...stylex.props(styles.intro)}>
				<h2 {...stylex.props(styles.kicker)}>
					Hi, I&apos;m Mattéo Marchelli.
				</h2>
				<h1
					{...withClassNames(
						stylex.props(styles.title),
						bricolage_grotesk.className,
					)}
				>
					<span>A fullstack developer that </span>
					<br {...stylex.props(styles.break)} />
					<span>
						builds good{" "}
						<span {...stylex.props(styles.highlight)}>
							experiences
							<Hoverline />
						</span>
					</span>
				</h1>
			</div>
			<InlineProjectsList
				data="latest"
				projects={featuredProjects}
				gridStyle={styles.list}
			/>
		</div>
	);
};

export default HeroSection;
