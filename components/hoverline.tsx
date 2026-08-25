"use client";

import { color } from "@/styles/tokens.stylex";
import * as stylex from "@stylexjs/stylex";
import { motion } from "motion/react";

const styles = stylex.create({
	line: {
		position: "absolute",
		left: "50%",
		top: "50%",
		zIndex: -10,
		width: "102%",
		height: "90%",
		backgroundColor: color.sand,
	},
});

const Hoverline = () => {
	const { className, style } = stylex.props(styles.line);

	return (
		<motion.span
			className={className}
			style={{
				...style,
				transform: "translateX(-50%) translateY(-40%) rotate(-1deg)",
				transformOrigin: "center left",
			}}
			initial={{ width: 0 }}
			animate={{ width: "102%" }}
			transition={{ duration: 0.4, ease: "easeInOut" }}
		/>
	);
};

export default Hoverline;
