import { cn } from "@/lib/utils";

interface BadgeProps {
    children: React.ReactNode;
    className?: string;
}

const Badge = ({ children, className }: BadgeProps) => {
    return (
        <span
            className={cn(
                "text-sm md:text-base py-1.5 px-3 bg-[#F8DFCB] rounded-sm font-medium",
                className
            )}
        >
            {children}
        </span>
    );
};

export default Badge;
