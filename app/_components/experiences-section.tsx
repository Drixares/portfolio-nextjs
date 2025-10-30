import { Heading2 } from "../../components/heading2";
import { type Experience as ExperienceType } from "@/types/experiences";
import { Line2 } from "./lines";
import Experience from "./experience";
import { ImpulseLab } from "@/components/icons/icons";

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

const ExperiencesSection = () => {
	return (
		<div className="relative z-20">
			<section
				className="flex flex-col lg:flex-row justify-between gap-6 scroll-mt-32 mx-auto max-w-7xl px-5 w-full"
				id="experiences"
			>
				<Heading2>experiences.</Heading2>
				<div className="flex flex-col lg:max-w-[50%] w-full">
					{experiences.map((experience, idx) => (
						<Experience
							idx={idx}
							key={`${experience.title}:${idx}`}
							experience={experience}
						/>
					))}
				</div>
			</section>
			<Line2 className="absolute -top-1/2 left-0 -z-10" />
		</div>
	);
};

export default ExperiencesSection;
