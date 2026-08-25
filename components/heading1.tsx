import { bricolage_grotesk } from "@/app/font";
import { withClassNames } from "@/lib/utils";
import { font, leading, text } from "@/styles/tokens.stylex";
import * as stylex from "@stylexjs/stylex";
import { ReactNode } from "react";

interface HeadingProps {
	children: ReactNode;
	style?: stylex.StyleXStyles;
}

const styles = stylex.create({
	heading: {
		fontSize: { default: text.xl4, "@media (min-width: 640px) and (max-width: 1023.98px)": text.xl6, "@media (min-width: 1024px)": text.xl7 },
		lineHeight: { default: leading.xl4, "@media (min-width: 640px)": leading.none },
		textTransform: "lowercase",
		fontWeight: font.light,
	},
});

const Heading1 = ({ children, style }: HeadingProps) => {
	return (
		<h1
			{...withClassNames(
				stylex.props(styles.heading, style),
				bricolage_grotesk.className,
			)}
		>
			{children}
		</h1>
	);
};

export default Heading1;
