import { fraunes } from "@/app/font";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface HeadingProps {
    className?: string;
    children: ReactNode;
}

export const Heading2 = ({ className, children }: HeadingProps) => {
    return (
        <h2
            className={cn(
                "text-4xl lg:text-5xl text-neutral-950 font-light",
                fraunes.className,
                className
            )}
        >
            {children}
        </h2>
    );
};
