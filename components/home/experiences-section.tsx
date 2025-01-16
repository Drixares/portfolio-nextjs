import { cn } from "@/lib/utils";
import { Heading2 } from "../globals/heading2";
import { Experience } from "@/types/experiences";

const experiences: Experience[] = [
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
        <section className="flex justify-between scroll-mt-32" id="experiences">
            <Heading2>experiences.</Heading2>
            <div className="flex flex-col max-w-[50%] w-full ">
                {experiences.map((experience, idx) => (
                    <div
                        key={experience.title}
                        className={cn(
                            "w-full flex items-center justify-between px-3 h-32 border-b border-neutral-300",
                            idx === 0 && "border-t"
                        )}
                    >
                        <div>
                            <h3 className="text-2xl text-slate-800">
                                {experience.title}
                            </h3>
                            <p className="text-neutral-700">
                                {experience.description}
                            </p>
                        </div>
                        <p className="text-neutral-800 font-light text-xl">
                            {experience.date}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ExperiencesSection;
