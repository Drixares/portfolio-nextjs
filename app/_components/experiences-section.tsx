import { Heading2 } from "../../components/heading2";
import { type Experience as ExperienceType } from "@/types/experiences";
import { Line2 } from "./lines";
import Experience from "./experience";

const experiences: ExperienceType[] = [
    {
        title: "Freelance",
        description: "Fullstack developer",
        date: "2024 - now",
    },
    {
        title: "La 404 Devinci",
        description: "Secretary & Fullstack developer - school association ",
        date: "2024 - 2025",
    },
    {
        title: "IIM Digital School",
        description: "Student - school",
        date: "2023 - 2028",
    },
    {
        title: "EligiusV (eSport)",
        description: "Bot & Web Developer - association under law 1901",
        date: "2021 - 2024",
    },
];

const ExperiencesSection = () => {
    return (
        <div className="relative z-20 px-5">
            <section
                className="flex flex-col lg:flex-row justify-between gap-6 scroll-mt-32 mx-auto max-w-screen-2xl w-full"
                id="experiences"
            >
                <Heading2>experiences.</Heading2>
                <div className="flex flex-col lg:max-w-[50%] w-full">
                    {experiences.map((experience, idx) => (
                        <Experience
                            idx={idx}
                            key={experience.title}
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
