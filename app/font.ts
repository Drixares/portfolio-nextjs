import { Fraunces } from "next/font/google";
import localFont from "next/font/local";

export const fraunes = Fraunces({
    subsets: ["latin"],
});

export const cabinet_grotesk = localFont({
    src: [
        {
            path: "./assets/fonts/CabinetGrotesk-Thin.woff2",
            weight: "100",
            style: "normal",
        },
        {
            path: "./assets/fonts/CabinetGrotesk-ExtraLight.woff2",
            weight: "200",
            style: "normal",
        },
        {
            path: "./assets/fonts/CabinetGrotesk-Light.woff2",
            weight: "300",
            style: "normal",
        },
        {
            path: "./assets/fonts/CabinetGrotesk-Regular.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "./assets/fonts/CabinetGrotesk-Medium.woff2",
            weight: "500",
            style: "normal",
        },
        {
            path: "./assets/fonts/CabinetGrotesk-Bold.woff2",
            weight: "700",
            style: "normal",
        },
        {
            path: "./assets/fonts/CabinetGrotesk-Extrabold.woff2",
            weight: "800",
            style: "normal",
        },
        {
            path: "./assets/fonts/CabinetGrotesk-Black.woff2",
            weight: "900",
            style: "normal",
        },
    ],
});
