import { STACK_ICONS } from "@/constants/projects";
import { color, radius, shadow } from "@/styles/tokens.stylex";
import { type StackIcon as StackIconType, StackName } from "@/types/projects";
import * as stylex from "@stylexjs/stylex";

interface StackIconProps {
	style?: stylex.StyleXStyles;
	icon: StackName;
}

const styles = stylex.create({
	box: {
		width: "2.75rem",
		height: "2.75rem",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: radius.lg,
		borderWidth: 1,
		borderStyle: "solid",
		borderColor: color.neutral200,
		backgroundColor: color.white80,
		boxShadow: shadow.md,
		backdropFilter: "blur(12px)",
	},
	icon: {
		width: "1.75rem",
		height: "1.75rem",
		fill: color.neutral600,
	},
});

const StackIcon = ({ style, icon }: StackIconProps) => {
	const Icon: StackIconType = STACK_ICONS[icon];

	return (
		<div {...stylex.props(styles.box, style)}>
			<Icon {...stylex.props(styles.icon)} />
		</div>
	);
};

export default StackIcon;
