"use client";

import DinoDevinci from "@/app/assets/images/projects/404devinci.png";
import AdventCalendly from "@/app/assets/images/projects/advent-calendly.png";
import EligiusV from "@/app/assets/images/projects/eligiusv.png";
import Learn404 from "@/app/assets/images/projects/learn404.png";
import Pokedex from "@/app/assets/images/projects/pokedex.png";
import Floating, {
    FloatingElement,
} from "@/components/fancy/parallax-floating";
import { Heading2 } from "@/components/heading2";
import { color, font, radius } from "@/styles/tokens.stylex";
import * as stylex from "@stylexjs/stylex";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const floatingElements = [
    {
        depth: 1,
        position: { top: "50%", left: "-0.75rem" },
        image: {
            src: Pokedex,
        },
    },
    {
        depth: 1.5,
        position: { top: "60%", left: "60%" },
        image: {
            src: EligiusV,
        },
    },
    {
        depth: 2,
        position: { top: "80%", left: "30%" },
        image: {
            src: DinoDevinci,
        },
    },
    {
        depth: 2.5,
        position: { top: "20%", left: "5%" },
        image: {
            src: AdventCalendly,
        },
    },
    {
        depth: 3,
        position: { top: "5%", left: "70%" },
        image: {
            src: Learn404,
        },
    },
];

const styles = stylex.create({
    section: {
        marginInline: "auto",
        width: { default: "100%", "@media (min-width: 1280px)": "75%" },
        height: "610px",
    },
    stage: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        backgroundColor: color.sand30,
        overflow: "hidden",
        position: "relative",
        borderRadius: radius.sm,
    },
    italic: {
        fontStyle: "italic",
    },
    content: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1.5rem",
        zIndex: 40,
    },
    cta: {
        paddingInline: "1.5rem",
        paddingBlock: "0.75rem",
        borderRadius: radius.full,
        backgroundColor: color.neutral950,
        color: color.neutral50,
        fontWeight: font.medium,
    },
    card: {
        zIndex: 50,
        width: { default: "10rem", "@media (min-width: 768px) and (max-width: 1023.98px)": "13rem", "@media (min-width: 1024px)": "18rem" },
        aspectRatio: "16 / 9",
        borderRadius: radius.sm,
        overflow: "hidden",
    },
    at: (top: string, left: string) => ({ top, left }),
});

export const ProjectsSection = () => {
    const containerRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "1.5 1"],
    });

    const scaleValue = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

    const stage = stylex.props(styles.stage);

    return (
        <section ref={containerRef} {...stylex.props(styles.section)}>
            <motion.div
                style={{ ...stage.style, scale: scaleValue }}
                className={stage.className}
            >
                <div {...stylex.props(styles.content)}>
                    <Heading2 style={styles.italic}>projects.</Heading2>
                    <Link href="/projects" {...stylex.props(styles.cta)}>
                        Let&apos;s see !
                    </Link>
                </div>
                <Floating>
                    {floatingElements.map(({ depth, position, image }, idx) => (
                        <FloatingElement
                            key={`float::${idx}`}
                            depth={depth}
                            style={[
                                styles.card,
                                styles.at(position.top, position.left),
                            ]}
                        >
                            <Image src={image.src} alt="Advent Calendly" />
                        </FloatingElement>
                    ))}
                </Floating>
            </motion.div>
        </section>
    );
};
