"use client";

import { radius } from "@/styles/tokens.stylex";
import * as stylex from "@stylexjs/stylex";
import { motion, useScroll, useTransform } from "motion/react";
import Image, { StaticImageData } from "next/image";
import { useRef } from "react";

interface AnimatedImageProps {
    image: StaticImageData;
    alt: string;
}

const styles = stylex.create({
    container: {
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100vh",
    },
    frame: {
        overflow: "hidden",
        borderRadius: radius.md,
        width: "24rem",
    },
});

const AnimatedImage = ({ image, alt }: AnimatedImageProps) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0", "0.3 start"],
    });

    // const scaleValue = useTransform(scrollYProgress, [0, 1], [1, 3]);
    const translateXValue = useTransform(scrollYProgress, [0, 1], [650, 0]);
    const translateYValue = useTransform(scrollYProgress, [0, 1], [-275, 0]);
    const scaleValue = useTransform(scrollYProgress, [0, 1], [1, 4]);

    const frame = stylex.props(styles.frame);

    return (
        <div ref={containerRef} {...stylex.props(styles.container)}>
            <motion.div
                className={frame.className}
                style={{
                    ...frame.style,
                    scale: scaleValue,
                    translateX: translateXValue,
                    translateY: translateYValue,
                }}
            >
                <Image src={image} alt={alt} />
            </motion.div>
        </div>
    );
};

export default AnimatedImage;
