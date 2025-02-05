"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "motion/react";
import { Ref, RefObject, useRef } from "react";

interface LineProps {
    className?: string;
}

export const Line = ({ className }: LineProps) => {
    const svgRef = useRef<unknown>(null);

    const { scrollYProgress } = useScroll({
        target: svgRef as RefObject<HTMLElement>,
        offset: ["start 600px", "end 300px"],
    });

    const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <motion.svg
            viewBox="0 0 1440 230"
            xmlns="http://www.w3.org/2000/svg"
            className={cn(className, "stroke-[#F8DFCB]/30")}
            fill="none"
            ref={svgRef as Ref<SVGSVGElement>}
        >
            <motion.path
                d="M1440 3C1235.5 286.093 701.772 221.209 651.5 212.569C506 187.561 461.14 160.101 255.855 86.2033C91.6273 27.0852 22.3644 79.6346 0 196.776"
                strokeWidth="8"
                pathLength={pathLength}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                }}
            />
        </motion.svg>
    );
};

export const Line2 = ({ className }: LineProps) => {
    const svgRef = useRef<unknown>(null);

    const { scrollYProgress } = useScroll({
        target: svgRef as RefObject<HTMLElement>,
        offset: ["start 600px", "end 300px"],
    });

    const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <motion.svg
            width="348"
            height="582"
            viewBox="0 0 348 582"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn(className, "stroke-[#F8DFCB]/30")}
            ref={svgRef as Ref<SVGSVGElement>}
        >
            <motion.path
                d="M1.72669 5C26.3001 45.9557 170.5 117 153.351 266.983C151.176 308.715 130.722 347.684 119.021 387.138C106.341 429.897 110.551 473.874 132.491 513.135C143.305 532.487 159.913 544.037 178.741 554.915C194.189 563.84 211.303 571.487 228.985 574.345C256.841 578.847 286.962 575.902 313.439 566.06C326.123 561.346 345.22 549.488 342.346 533.518C336.521 501.157 301.138 488.193 272.851 481.189C247.536 474.92 219.779 475.375 193.88 477.255C171.595 478.872 148.583 484.36 127.127 490.427C84.3761 502.515 42.9995 517.818 1.72669 534.233C-10.919 539.263 -23.6228 544.083 -36.0603 549.61C-41.1457 551.871 -47.0467 553.265 -51.7949 556.167"
                strokeWidth="8"
                strokeLinecap="round"
                pathLength={pathLength}
            />
        </motion.svg>
    );
};
