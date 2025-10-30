import { cn } from "@/lib/utils";
import { type Experience as ExperienceType } from "@/types/experiences";
import { bricolage_grotesk } from "../font";

interface ExperienceProps {
	experience: ExperienceType;
	idx: number;
}

const Experience = ({ experience, idx }: ExperienceProps) => {
	return (
		<div
			key={experience.title}
			className={cn(
				"w-full flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-3 py-4 sm:h-32 border-b border-neutral-300",
				idx === 0 && "border-t",
			)}
		>
			<div className="flex flex-col sm:flex-row sm:items-center gap-3">
				{experience.icon && (
					<div className="w-11 flex items-center justify-center rounded-lg border border-neutral-200 bg-white/80 p-1 shadow-md backdrop-blur-md">
						<experience.icon className="size-7 text-neutral-600" />
					</div>
				)}

				<div>
					<h3
						className={cn(
							"text-md md:text-xl xs:text-2xl text-slate-800",
							bricolage_grotesk.className,
						)}
					>
						{experience.title}
					</h3>
					<p className="text-neutral-700 leading-5">{experience.description}</p>
				</div>
			</div>
			<p className="text-neutral-800 text-sm sm:text-md shrink-0">
				{experience.date}
			</p>
		</div>
	);
};

export default Experience;
