import { bricolage_grotesk } from "@/app/font";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface HeadingProps {
    children: ReactNode;
    className?: string;
}

const Heading1 = ({ children, className }: HeadingProps) => {
    return (
        <h1
            className={cn(
                "text-4xl  sm:text-6xl lg:text-7xl lowercase font-light",
                bricolage_grotesk.className,
                className
            )}
        >
            {children}
        </h1>
    );
};

export default Heading1;
