"use client";

import Image, { StaticImageData } from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

interface AnimatedImageProps {
    image: StaticImageData;
    alt: string;
}

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

    return (
        <div
            ref={containerRef}
            className="relative flex items-center justify-center w-full h-screen"
        >
            <motion.div
                className="overflow-hidden rounded-md w-96"
                style={{
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
