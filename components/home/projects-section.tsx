"use client";

import Link from "next/link";
import Floating, { FloatingElement } from "../fancy/parallax-floating";
import Image from "next/image";
import AdventCalendly from "@/app/assets/images/projects/advent-calendly.png";
import Learn404 from "@/app/assets/images/projects/learn404.png";
import DinoDevinci from "@/app/assets/images/projects/404devinci.png";
import Pokedex from "@/app/assets/images/projects/pokedex.png";
import EligiusV from "@/app/assets/images/projects/eligiusv.png";
import { cn } from "@/lib/utils";
import { Heading2 } from "../globals/heading2";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const floatingElements = [
    {
        depth: 1,
        position: "top-1/2 -left-3",
        image: {
            src: Pokedex,
        },
    },
    {
        depth: 1.5,
        position: "top-[60%] left-[60%]",
        image: {
            src: EligiusV,
        },
    },
    {
        depth: 2,
        position: "top-[80%] left-[30%]",
        image: {
            src: DinoDevinci,
        },
    },
    {
        depth: 2.5,
        position: "top-[20%] left-[5%]",
        image: {
            src: AdventCalendly,
        },
    },
    {
        depth: 3,
        position: "top-[5%] left-[70%]",
        image: {
            src: Learn404,
        },
    },
];

export const ProjectsSection = () => {
    const containerRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "1.5 1"],
    });

    const scaleValue = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

    return (
        <section ref={containerRef} className="mx-auto w-3/4 h-[418px]">
            <motion.div
                style={{ scale: scaleValue }}
                className="flex justify-center items-center w-full h-full bg-[#F8DFCB]/50 overflow-hidden relative rounded-sm"
            >
                <div className="flex flex-col items-center gap-6 z-40">
                    <Heading2 className="italic">projects.</Heading2>
                    <Link
                        href="/projects"
                        className="px-6 py-3 rounded-full bg-neutral-950 text-neutral-50"
                    >
                        Let&apos;s see !
                    </Link>
                </div>
                <Floating>
                    {floatingElements.map(({ depth, position, image }, idx) => (
                        <FloatingElement
                            key={`float::${idx}`}
                            depth={depth}
                            className={cn(
                                "z-50 w-72 aspect-video rounded-sm overflow-hidden",
                                position
                            )}
                        >
                            <Image src={image.src} alt="Advent Calendly" />
                        </FloatingElement>
                    ))}
                </Floating>
            </motion.div>
        </section>
    );
};
