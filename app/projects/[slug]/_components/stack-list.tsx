import { ProjectStack } from "@/types/projects";
import * as stylex from "@stylexjs/stylex";
import StackIcon from "./stack-icon";

const styles = stylex.create({
	list: {
		display: "flex",
		alignItems: "center",
		gap: "0.5rem",
		flexWrap: "wrap",
		maxWidth: "42rem",
	},
});

const StackList = ({ stack }: { stack: ProjectStack }) => {
	return (
		<div {...stylex.props(styles.list)}>
			{stack.map((stack, idx) => (
				<StackIcon key={idx} icon={stack} />
			))}
		</div>
	);
};

export default StackList;
