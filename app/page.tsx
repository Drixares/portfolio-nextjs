import AboutSection from "@/app/_components/about-section";
import ExperiencesSection from "@/app/_components/experiences-section";
import HeroSection from "@/app/_components/hero-section";
import { ProjectsSection } from "@/app/_components/projects-section";
import Footer from "@/components/footer";
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
	page: {
		display: "flex",
		flexDirection: "column",
		rowGap: "16rem",
	},
});

export default function Home() {
	return (
		<div {...stylex.props(styles.page)}>
			<HeroSection />
			<AboutSection />
			<ExperiencesSection />
			<ProjectsSection />
			<Footer />
		</div>
	);
}
