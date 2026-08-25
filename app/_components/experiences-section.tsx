import { ImpulseLab } from "@/components/icons/icons";
import { Heading2 } from "@/components/heading2";
import { type Experience as ExperienceType } from "@/types/experiences";
import * as stylex from "@stylexjs/stylex";
import Experience from "./experience";
import { Line2 } from "./lines";

const experiences: ExperienceType[] = [
	{
		title: "Apprenticeship - Software Engineer",
		description: "Impulse Lab",
		date: "Sept 2025 - now",
		icon: ImpulseLab,
	},
	{
		title: "Internship - Software Engineer",
		description: "Impulse Lab",
		date: "Apr 2025 - Jul 2025",
		icon: ImpulseLab,
	},
	{
		title: "Software Engineer",
		description: "Freelance",
		date: "2024 - 2025",
	},
	{
		title: "Secretary & Software Engineer",
		description: "La 404 Devinci",
		date: "2024 - 2025",
	},
	{
		title: "Student",
		description: "IIM Digital School",
		date: "2023 - 2028",
	},
	{
		title: "Fullstack developer",
		description: "EligiusV (eSport) - association under law 1901",
		date: "2021 - 2024",
	},
];

const styles = stylex.create({
	wrapper: {
		position: "relative",
		zIndex: 20,
	},
	section: {
		display: "flex",
		flexDirection: { default: "column", "@media (min-width: 1024px)": "row" },
		justifyContent: "space-between",
		gap: "1.5rem",
		scrollMarginTop: "8rem",
		marginInline: "auto",
		maxWidth: "80rem",
		paddingInline: "1.25rem",
		width: "100%",
	},
	list: {
		display: "flex",
		flexDirection: "column",
		maxWidth: { default: null, "@media (min-width: 1024px)": "50%" },
		width: "100%",
	},
	line: {
		position: "absolute",
		top: "-50%",
		left: 0,
		zIndex: -10,
	},
});

const ExperiencesSection = () => {
	return (
		<div {...stylex.props(styles.wrapper)}>
			<section {...stylex.props(styles.section)} id="experiences">
				<Heading2>experiences.</Heading2>
				<div {...stylex.props(styles.list)}>
					{experiences.map((experience, idx) => (
						<Experience
							idx={idx}
							key={`${experience.title}:${idx}`}
							experience={experience}
						/>
					))}
				</div>
			</section>
			<Line2 style={styles.line} />
		</div>
	);
};

export default ExperiencesSection;
