"use client";

import { NAVLINKS, ROUTES } from "@/constants/page";
import {
	color,
	easing,
	radius,
	shadow,
	transition,
} from "@/styles/tokens.stylex";
import * as stylex from "@stylexjs/stylex";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type LinkRef = HTMLElement | null;

const styles = stylex.create({
	nav: {
		position: "sticky",
		top: 0,
		isolation: "isolate",
		zIndex: 50,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		gap: "1rem",
		paddingTop: "2.5rem",
		paddingInline: "1.25rem",
		maxWidth: "80rem",
		marginInline: "auto",
	},
	spacer: {
		display: { default: "none", "@media (min-width: 768px)": "flex" },
		flexGrow: 1,
		flexShrink: 1,
		flexBasis: "0%",
	},
	pill: {
		position: "relative",
		display: "flex",
		borderRadius: radius.lg,
		borderWidth: 1,
		borderStyle: "solid",
		borderColor: color.neutral200,
		backgroundColor: color.white80,
		padding: "0.25rem",
		boxShadow: shadow.md,
		backdropFilter: "blur(12px)",
	},
	link: {
		color: { default: color.neutral500, ":hover": color.neutral950 },
		paddingInline: "0.75rem",
		paddingBlock: "0.25rem",
	},
	linkActive: {
		color: color.neutral950,
	},
	highlight: {
		position: "absolute",
		left: 0,
		zIndex: -10,
		height: "1.75rem",
		borderRadius: radius.sm,
		backgroundColor: color.neutral200_70,
		backdropFilter: "blur(8px)",
	},
	navLinks: {
		display: { default: "none", "@media (min-width: 768px)": "flex" },
		flexGrow: 1,
		flexShrink: 1,
		flexBasis: "0%",
		alignItems: "center",
		justifyContent: "flex-end",
		gap: "0.75rem",
	},
	navLink: {
		color: { default: color.neutral400, ":hover": color.neutral950 },
		textDecorationLine: { default: "none", ":hover": "underline" },
		textUnderlineOffset: "4px",
		textDecorationStyle: "wavy",
		cursor: "alias",
		transitionProperty: transition.colors,
		transitionDuration: "150ms",
		transitionTimingFunction: easing.inOut,
	},
});

const TopNavigation = () => {
	const pathname = usePathname();

	const [linkRefs] = useState<LinkRef[]>([]);
	const [idx, setIdx] = useState<number | null>(null);
	const hoveredLink = linkRefs[idx ?? -1]?.getBoundingClientRect();
	const [navRef, setNavRef] = useState<HTMLElement | null>(null);
	const navRect = navRef?.getBoundingClientRect();

	return (
		<nav {...stylex.props(styles.nav)}>
			<div {...stylex.props(styles.spacer)} />
			<div
				onMouseLeave={() => setIdx(null)}
				{...stylex.props(styles.pill)}
				ref={(el) => setNavRef(el!)}
				style={{ transform: "none" }}
			>
				{ROUTES.map(({ label, path }, idx) => (
					<Link
						href={path}
						key={path}
						ref={(el: HTMLAnchorElement | null): void => {
							linkRefs[idx] = el;
						}}
						onPointerEnter={() => setIdx(idx)}
						{...stylex.props(
							styles.link,
							pathname === path && styles.linkActive,
						)}
					>
						{label}
					</Link>
				))}
				<AnimatePresence>
					{hoveredLink && (
						<motion.div
							{...stylex.props(styles.highlight)}
							initial={{
								left: hoveredLink.left - (navRect?.left || 0),
								height: hoveredLink.height,
								width: hoveredLink.width,
								opacity: 0,
							}}
							animate={{
								left: hoveredLink.left - (navRect?.left || 0),
								height: hoveredLink.height,
								width: hoveredLink.width,
								opacity: 1,
							}}
							exit={{
								left: hoveredLink.left - (navRect?.left || 0),
								height: hoveredLink.height,
								width: hoveredLink.width,
								opacity: 0,
							}}
							transition={{
								duration: 0.17,
							}}
						/>
					)}
				</AnimatePresence>
			</div>
			<NavLinks />
		</nav>
	);
};

function NavLinks() {
	return (
		<div {...stylex.props(styles.navLinks)}>
			{NAVLINKS.map(({ label, path }) => (
				<Link
					key={path}
					href={path}
					{...stylex.props(styles.navLink)}
					target="_blank"
				>
					{label}
				</Link>
			))}
		</div>
	);
}

export default TopNavigation;
