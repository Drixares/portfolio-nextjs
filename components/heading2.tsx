import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface HeadingProps {
    className?: string;
    children: ReactNode;
}

export const Heading2 = ({ className, children }: HeadingProps) => {
    return (
        <h2 className={cn("text-5xl text-neutral-950 font-light", className)}>
            {children}
        </h2>
    );
};
