import TopNavigation from "@/components/top-navigation";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Toaster } from "sonner";
import { bricolage_grotesk, dm_sans } from "./font";
import "./globals.css";

export const metadata: Metadata = {
	title: "Portfolio - Mattéo Marchelli",
	description: "Mattéo Marchelli's portfolio website - 2025",
	authors: [{ name: "Mattéo Marchelli", url: "https://matteo-marchelli.com" }],
	robots: {
		index: true,
		follow: true,
	},
	openGraph: {
		title: "Portfolio - Mattéo Marchelli",
		description: "Mattéo Marchelli's portfolio website - 2025",
		url: "https://matteo-marchelli.com",
		siteName: "Mattéo Marchelli's Portfolio",
		locale: "en_US",
		type: "website",
	},
	icons: {
		icon: "/favicon.ico",
	},
	keywords: [
		"Mattéo Marchelli",
		"Mattéo Portfolio",
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
			</body>
		</html>
	);
}
