import Heading1 from "@/components/heading1";
import Peep from "@/components/peep";
import {
	color,
	easing,
	font,
	leading,
	radius,
	text,
	transition,
} from "@/styles/tokens.stylex";
import * as stylex from "@stylexjs/stylex";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

const styles = stylex.create({
	page: {
		marginBottom: { default: "4rem", "@media (min-width: 768px)": "8rem" },
		marginTop: { default: "0.5rem", "@media (min-width: 768px)": "8rem" },
		marginInline: "auto",
		maxWidth: "80rem",
		width: "100%",
		paddingInline: "1.25rem",
		display: "flex",
		flexDirection: { default: "column", "@media (min-width: 768px)": "row" },
		alignItems: "center",
		justifyContent: "center",
		columnGap: "2.5rem",
	},
	illustration: {
		position: "relative",
		width: { default: "16rem", "@media (min-width: 768px)": "24rem" },
		height: { default: "16rem", "@media (min-width: 768px)": "24rem" },
		overflow: "hidden",
	},
	peep: {
		width: "100%",
		height: "100%",
		objectFit: "cover",
	},
	content: {
		display: "flex",
		flexDirection: "column",
		alignItems: { default: "center", "@media (min-width: 768px)": "flex-start" },
		justifyContent: "center",
		textAlign: { default: null, "@media (max-width: 767.98px)": "center" },
	},
	heading: {
		textTransform: "capitalize",
		display: "flex",
		flexDirection: "column",
		alignItems: { default: "center", "@media (min-width: 768px)": "flex-start" },
		justifyContent: "center",
	},
	code: {
		fontSize: { default: text.xl8, "@media (min-width: 768px)": text.xl9 },
		lineHeight: leading.none,
		fontWeight: font.bold,
	},
	tagline: {
		fontSize: text.xl2,
		lineHeight: leading.xl2,
		fontWeight: font.medium,
		color: color.neutral600,
	},
	blurb: {
		marginTop: "1rem",
		color: color.neutral500,
		textAlign: { default: "center", "@media (min-width: 768px)": "left" },
		maxWidth: "28rem",
	},
	back: {
		backgroundColor: { default: color.neutral900, ":hover": color.neutral800 },
		color: color.white,
		paddingInline: "1.5rem",
		paddingBlock: "0.75rem",
		borderRadius: radius.full,
		marginTop: "2rem",
		display: "flex",
		alignItems: "center",
		gap: "0.5rem",
		// StyleX has no descendant selectors: this stands in for the arrow's
		// former `group-hover:-translate-x-1`.
		"--back-arrow-x": { default: "0px", ":hover": "-0.25rem" },
	},
	backArrow: {
		width: "1rem",
		height: "1rem",
		transform: "translateX(var(--back-arrow-x))",
		transitionProperty: transition.transform,
		transitionDuration: "300ms",
		transitionTimingFunction: easing.inOut,
	},
});

const NotFound = () => {
	return (
		<div {...stylex.props(styles.page)}>
			{/* Peep illustration with hover effect */}
			<div {...stylex.props(styles.illustration)}>
				<Peep style={styles.peep} />
			</div>

			{/* Content */}
			<div {...stylex.props(styles.content)}>
				<Heading1 style={styles.heading}>
					<span {...stylex.props(styles.code)}>404</span>
					<span {...stylex.props(styles.tagline)}>Oops ! Page not found</span>
				</Heading1>

				<p {...stylex.props(styles.blurb)}>
					The page you are looking for seems to have disappeared into
					cyberspace. Don&apos;t worry, you can always go back to the homepage!
				</p>

				<Link href="/" {...stylex.props(styles.back)}>
					<ArrowLeftIcon {...stylex.props(styles.backArrow)} /> Go back to
					homepage
				</Link>
			</div>
		</div>
	);
};

export default NotFound;
