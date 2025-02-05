import TopNavigation from "@/components/top-navigation";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Toaster } from "sonner";
import { bricolage_grotesk, dm_sans } from "./font";
import "./globals.css";

export const metadata: Metadata = {
    title: "Portfolio - Mattéo Marchelli",
    description: "Mattéo Marchelli's portfolio website - 2025",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            {/* <head>
                <script
                    src="https://unpkg.com/react-scan/dist/auto.global.js"
                    async
                />
            </head> */}
            <body
                suppressHydrationWarning
                className={cn(
                    "antialiased overflow-x-hidden",
                    dm_sans.className,
                    bricolage_grotesk.className
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
