import { Heading2 } from "@/components/heading2";
import {
	color,
	easing,
	leading,
	text,
	transition,
} from "@/styles/tokens.stylex";
import * as stylex from "@stylexjs/stylex";
import Link from "next/link";
import { Line } from "./lines";

const styles = stylex.create({
	wrapper: {
		position: "relative",
		zIndex: 20,
		width: "100%",
		paddingInline: "1.25rem",
	},
	section: {
		marginInline: "auto",
		maxWidth: "42rem",
		width: "100%",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		gap: "1.5rem",
	},
	headingRow: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		width: "100%",
	},
	prose: {
		display: "flex",
		flexDirection: "column",
		gap: "1.25rem",
		color: color.neutral600,
		fontSize: { default: text.lg, "@media (min-width: 768px)": text.xl },
		lineHeight: { default: leading.lg, "@media (min-width: 768px)": leading.xl },
	},
	link: {
		color: color.neutral950,
		textDecorationLine: { default: "none", ":hover": "underline" },
		textUnderlineOffset: "4px",
		cursor: "alias",
		textDecorationStyle: "wavy",
		transitionProperty: transition.colors,
		transitionDuration: "150ms",
		transitionTimingFunction: easing.inOut,
	},
	line: {
		position: "absolute",
		top: "-20rem",
		left: "-0.75rem",
		width: "102vw",
		zIndex: -10,
	},
});

const AboutSection = () => {
	const calculateAge = () => {
		const birthDate = new Date("2005-07-20");
		const today = new Date();
		let age = today.getFullYear() - birthDate.getFullYear();
		const monthDiff = today.getMonth() - birthDate.getMonth();

		if (
			monthDiff < 0 ||
			(monthDiff === 0 && today.getDate() < birthDate.getDate())
		) {
			age--;
		}

		return age;
	};

	const age = calculateAge();

	return (
		<div {...stylex.props(styles.wrapper)}>
			<section {...stylex.props(styles.section)}>
				<div {...stylex.props(styles.headingRow)}>
					<Heading2>about.</Heading2>
					{/* <Badge>looking for internship</Badge> */}
				</div>
				<div {...stylex.props(styles.prose)}>
					<p>
						A {age} yo student & SWE at{" "}
						<Link
							href="https://impulselab.ai"
							target="_blank"
							{...stylex.props(styles.link)}
						>
							Impulse Lab
						</Link>{" "}
						who loves build things. I&apos;ve been learning web development on
						my own since 2021. I love designing applications and websites (when
						i got inspiration).
					</p>
					<p>
						In my free time, i enjoy reading books, working out and playing
						competitive games.
					</p>
					<p>
						Currently doing my third year at{" "}
						<Link
							href="https://iim.fr"
							target="_blank"
							{...stylex.props(styles.link)}
						>
							IIM Digital School
						</Link>{" "}
						in Paris, in the coding and digital innovation program.
					</p>
				</div>
			</section>
			<Line style={styles.line} />
		</div>
	);
};

export default AboutSection;
