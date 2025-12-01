import type { Metadata } from "next";
import { Toaster } from "sonner";
import TopNavigation from "@/components/top-navigation";
import { cn } from "@/lib/utils";
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

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="scroll-smooth">
			<body
				suppressHydrationWarning
				className={cn(
					"antialiased overflow-x-hidden",
					dm_sans.className,
					bricolage_grotesk.className,
				)}
			>
				<div className="w-full bg-white">
					<TopNavigation />
					{children}
				</div>
				<Toaster />
				<Databuddy clientId="QXd-sTxWQw3EdsoH_G3yq" enableBatching={true} />
			</body>
		</html>
	);
}
