import type { Metadata } from "next";
import * as stylex from "@stylexjs/stylex";
import { Toaster } from "sonner";
import TopNavigation from "@/components/top-navigation";
import { withClassNames } from "@/lib/utils";
import { color, theme } from "@/styles/tokens.stylex";
import { bricolage_grotesk, dm_sans } from "./font";
import "./globals.css";
import { Databuddy } from "@databuddy/sdk/react";

export const metadata: Metadata = {
	title: "Mattéo Marchelli - Software Engineer at Impulse Lab",
	description: "Mattéo Marchelli's portfolio website.",
	authors: [{ name: "Mattéo Marchelli", url: "https://matteo-marchelli.com" }],
	robots: {
		index: true,
		follow: true,
	},
	openGraph: {
		title: "Mattéo Marchelli - Software Engineer at Impulse Lab",
		description: "Mattéo Marchelli's portfolio website.",
		url: "https://matteo-marchelli.com",
		siteName: "Mattéo Marchelli - Software Engineer at Impulse Lab",
		locale: "en_US",
		type: "website",
	},
	icons: {
		icon: "/favicon.ico",
	},
	keywords: [
		"Mattéo Marchelli",
		"Mattéo Portfolio",
		"Matteo software engineer",
		"Web Developer",
		"Full Stack Developer",
		"React Developer",
		"Next.js Developer",
		"TypeScript Developer",
	],
};

const styles = stylex.create({
	root: {
		scrollBehavior: "smooth",
	},
	body: {
		WebkitFontSmoothing: "antialiased",
		MozOsxFontSmoothing: "grayscale",
		overflowX: "hidden",
		color: theme.foreground,
	},
	shell: {
		width: "100%",
		backgroundColor: color.white,
	},
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" {...stylex.props(styles.root)}>
			<body
				suppressHydrationWarning
				{...withClassNames(
					stylex.props(styles.body),
					dm_sans.className,
					bricolage_grotesk.className,
				)}
			>
				<div {...stylex.props(styles.shell)}>
					<TopNavigation />
					{children}
				</div>
				<Toaster />
				<Databuddy clientId="QXd-sTxWQw3EdsoH_G3yq" enableBatching={true} />
			</body>
		</html>
	);
}
