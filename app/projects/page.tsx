import Footer from "@/components/footer";
import { ProjectsGrid } from "@/components/grid";
import Heading1 from "@/components/heading1";
import { color, leading, text } from "@/styles/tokens.stylex";
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
	page: {
		display: "flex",
		flexDirection: "column",
		rowGap: "16rem",
	},
	main: {
		marginTop: "4rem",
		marginInline: "auto",
		maxWidth: "80rem",
		width: "100%",
		paddingInline: "1.25rem",
	},
	intro: {
		display: "flex",
		flexDirection: "column",
		rowGap: "1.25rem",
	},
	tagline: {
		fontSize: text.lg,
		lineHeight: leading.lg,
		color: color.neutral600,
		maxWidth: "42rem",
	},
});

const ProjectsPage = () => {
	return (
		<div {...stylex.props(styles.page)}>
			<div {...stylex.props(styles.main)}>
				<div {...stylex.props(styles.intro)}>
					<Heading1>projects.</Heading1>
					<p {...stylex.props(styles.tagline)}>
						I like building things so there are a few projects that i have been
						working on in my free time.
					</p>
				</div>
				<ProjectsGrid />
			</div>
			<Footer />
		</div>
	);
};

export default ProjectsPage;
