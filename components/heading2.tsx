import { bricolage_grotesk } from "@/app/font";
import { withClassNames } from "@/lib/utils";
import { color, font, leading, text } from "@/styles/tokens.stylex";
import * as stylex from "@stylexjs/stylex";
import { ReactNode } from "react";

interface HeadingProps {
	style?: stylex.StyleXStyles;
	children: ReactNode;
}

const styles = stylex.create({
	heading: {
		fontSize: { default: text.xl4, "@media (min-width: 1024px)": text.xl5 },
		lineHeight: { default: leading.xl4, "@media (min-width: 1024px)": leading.none },
		color: color.neutral950,
		fontWeight: font.light,
	},
});

export const Heading2 = ({ style, children }: HeadingProps) => {
	return (
		<h2
			{...withClassNames(
				stylex.props(styles.heading, style),
				bricolage_grotesk.className,
			)}
		>
			{children}
		</h2>
	);
};
