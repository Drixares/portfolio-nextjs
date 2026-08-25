import { color, leading, radius, text } from "@/styles/tokens.stylex";
import * as stylex from "@stylexjs/stylex";

interface BadgeProps {
	children: React.ReactNode;
	style?: stylex.StyleXStyles;
}

const styles = stylex.create({
	badge: {
		fontSize: { default: text.sm, "@media (min-width: 768px)": text.base },
		lineHeight: { default: leading.sm, "@media (min-width: 768px)": leading.base },
		paddingBlock: "0.375rem",
		paddingInline: "0.75rem",
		backgroundColor: color.sand,
		borderRadius: radius.sm,
	},
});

const Badge = ({ children, style }: BadgeProps) => {
	return <span {...stylex.props(styles.badge, style)}>{children}</span>;
};

export default Badge;
