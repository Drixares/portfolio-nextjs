import { STACK_ICONS } from "@/constants/projects";
import { cn } from "@/lib/utils";
import { type StackIcon as StackIconType, StackName } from "@/types/projects";

interface StackIconProps {
	className?: string;
	icon: StackName;
}

const StackIcon = ({ className, icon }: StackIconProps) => {
	const Icon: StackIconType = STACK_ICONS[icon];

	return (
		<div
			className={cn(
				`size-11 flex items-center justify-center rounded-lg border border-neutral-200 bg-white/80
                 shadow-md backdrop-blur-md`,
				className,
			)}
		>
			<Icon className="size-7 !fill-neutral-600" />
		</div>
	);
};

export default StackIcon;
