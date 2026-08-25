import Footer from "@/components/footer";
import Heading1 from "@/components/heading1";
import { color, leading, text } from "@/styles/tokens.stylex";
import * as stylex from "@stylexjs/stylex";
import ContactForm from "./_components/contact-form";

const styles = stylex.create({
	page: {
		display: "flex",
		flexDirection: "column",
		rowGap: "16rem",
	},
	main: {
		marginTop: "4rem",
		marginInline: "auto",
		maxWidth: "80rem",
		width: "100%",
		paddingInline: "1.25rem",
	},
	intro: {
		display: "flex",
		flexDirection: "column",
		rowGap: "1.25rem",
	},
	tagline: {
		fontSize: { default: null, "@media (min-width: 640px)": text.lg },
		lineHeight: { default: null, "@media (min-width: 640px)": leading.lg },
		color: color.neutral600,
		maxWidth: "42rem",
	},
});

const ContactPage = () => {
	return (
		<div {...stylex.props(styles.page)}>
			<div {...stylex.props(styles.main)}>
				<div {...stylex.props(styles.intro)}>
					<Heading1>contact form.</Heading1>
					<p {...stylex.props(styles.tagline)}>
						hey, let&apos;s talk about what you need and how i can help.
					</p>
				</div>
				<ContactForm />
			</div>
			<Footer />
		</div>
	);
};

export default ContactPage;
