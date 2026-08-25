import { font } from "@/styles/tokens.stylex";
import * as stylex from "@stylexjs/stylex";
import { Tree } from "@phosphor-icons/react/dist/ssr";

const styles = stylex.create({
	footer: {
		paddingBottom: "2.25rem",
		width: "100%",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		gap: "0.75rem",
		fontWeight: font.medium,
	},
});

const Footer = () => {
	return (
		<footer {...stylex.props(styles.footer)}>
			<Tree size={24} color="#475569" />
			Designed & Built by Mattéo.
		</footer>
	);
};

export default Footer;
