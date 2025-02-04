import { cn } from "@/lib/utils";
import { type Experience as ExperienceType } from "@/types/experiences";
import { fraunes } from "../font";

interface ExperienceProps {
    experience: ExperienceType;
    idx: number;
}

const Experience = ({ experience, idx }: ExperienceProps) => {
    return (
        <div
            key={experience.title}
            className={cn(
                "w-full flex items-center justify-between gap-3 px-3 h-32 border-b border-neutral-300",
                idx === 0 && "border-t"
            )}
        >
            <div>
                <h3
                    className={cn(
                        "text-xl xs:text-2xl text-slate-800",
                        fraunes.className
                    )}
                >
                    {experience.title}
                </h3>
                <p className="text-neutral-700 leading-5">
                    {experience.description}
                </p>
            </div>
            <p className="text-neutral-800 md:text-xl shrink-0">
                {experience.date}
            </p>
        </div>
    );
};

export default Experience;
