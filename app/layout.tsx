import type { Metadata } from "next";
import "./globals.css";
import { fraunes, inter } from "./font";
import { cn } from "@/lib/utils";
import TopNavigation from "@/components/top-navigation";

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
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
                    "antialiased",
                    fraunes.className,
                    inter.className
                )}
            >
                <div className="w-full bg-background">
                    <TopNavigation />
                    {children}
                </div>
            </body>
        </html>
    );
}
