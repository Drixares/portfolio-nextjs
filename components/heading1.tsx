import { fraunes } from "@/app/font";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const Heading1 = ({ children }: { children: ReactNode }) => {
    return (
        <h1 className={cn("text-7xl lowercase font-light", fraunes.className)}>
            {children}
        </h1>
    );
};

export default Heading1;
