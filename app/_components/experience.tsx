import { withClassNames } from "@/lib/utils";
import {
	color,
	leading,
	radius,
	shadow,
	text,
} from "@/styles/tokens.stylex";
import { type Experience as ExperienceType } from "@/types/experiences";
import * as stylex from "@stylexjs/stylex";
import { bricolage_grotesk } from "../font";

interface ExperienceProps {
	experience: ExperienceType;
	idx: number;
}

const styles = stylex.create({
	row: {
		width: "100%",
		display: "flex",
		flexDirection: { default: "column", "@media (min-width: 640px)": "row" },
		alignItems: { default: null, "@media (min-width: 640px)": "center" },
		justifyContent: "space-between",
		gap: "0.75rem",
		paddingInline: "0.75rem",
		paddingBlock: "1rem",
		height: { default: null, "@media (min-width: 640px)": "8rem" },
		borderBottomWidth: 1,
		borderBottomStyle: "solid",
		borderBottomColor: color.neutral300,
	},
	firstRow: {
		borderTopWidth: 1,
		borderTopStyle: "solid",
		borderTopColor: color.neutral300,
	},
	body: {
		display: "flex",
		flexDirection: { default: "column", "@media (min-width: 640px)": "row" },
		alignItems: { default: null, "@media (min-width: 640px)": "center" },
		gap: "0.75rem",
	},
	iconBox: {
		width: "2.75rem",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: radius.lg,
		borderWidth: 1,
		borderStyle: "solid",
		borderColor: color.neutral200,
		backgroundColor: color.white80,
		padding: "0.25rem",
		boxShadow: shadow.md,
		backdropFilter: "blur(12px)",
	},
	icon: {
		width: "1.75rem",
		height: "1.75rem",
		color: color.neutral600,
	},
	title: {
		fontSize: { default: null, "@media (min-width: 768px)": text.xl },
		lineHeight: { default: null, "@media (min-width: 768px)": leading.xl },
		color: color.slate800,
	},
	description: {
		color: color.neutral700,
		lineHeight: "1.25rem",
	},
	date: {
		color: color.neutral800,
		fontSize: text.sm,
		lineHeight: leading.sm,
		flexShrink: 0,
	},
});

const Experience = ({ experience, idx }: ExperienceProps) => {
	return (
		<div
			key={experience.title}
			{...stylex.props(styles.row, idx === 0 && styles.firstRow)}
		>
			<div {...stylex.props(styles.body)}>
				{experience.icon && (
					<div {...stylex.props(styles.iconBox)}>
						<experience.icon {...stylex.props(styles.icon)} />
					</div>
				)}

				<div>
					<h3
						{...withClassNames(
							stylex.props(styles.title),
							bricolage_grotesk.className,
						)}
					>
						{experience.title}
					</h3>
					<p {...stylex.props(styles.description)}>{experience.description}</p>
				</div>
			</div>
			<p {...stylex.props(styles.date)}>{experience.date}</p>
		</div>
	);
};

export default Experience;
