import { STACK_ICONS } from "@/constants/projects";
import { cn } from "@/lib/utils";
import { StackName } from "@/types/projects";
import { ComponentType } from "react";

interface StackIconProps {
    className?: string;
    icon: StackName;
}

const StackIcon = ({ className, icon }: StackIconProps) => {
    const Icon: ComponentType = STACK_ICONS[icon];

    return (
        <div
            className={cn(
                `w-11 flex items-center justify-center rounded-lg border border-neutral-200 bg-white/80 p-1
                 shadow-md backdrop-blur-md`,
                className
            )}
        >
            <Icon />
        </div>
    );
};

export default StackIcon;
