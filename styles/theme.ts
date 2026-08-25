import * as stylex from "@stylexjs/stylex";
import { theme } from "./tokens.stylex";

/**
 * Dark palette, carried over from the `.dark` block that used to live in
 * `app/globals.css`. Apply it by spreading `stylex.props(darkTheme, …)` on the
 * element that should scope it.
 */
export const darkTheme = stylex.createTheme(theme, {
	background: "hsl(240 10% 3.9%)",
	foreground: "hsl(0 0% 98%)",
	card: "hsl(240 10% 3.9%)",
	cardForeground: "hsl(0 0% 98%)",
	popover: "hsl(240 10% 3.9%)",
	popoverForeground: "hsl(0 0% 98%)",
	primary: "hsl(0 0% 98%)",
	primaryForeground: "hsl(240 5.9% 10%)",
	secondary: "hsl(240 3.7% 15.9%)",
	secondaryForeground: "hsl(0 0% 98%)",
	muted: "hsl(240 3.7% 15.9%)",
	mutedForeground: "hsl(240 5% 64.9%)",
	accent: "hsl(240 3.7% 15.9%)",
	accentForeground: "hsl(0 0% 98%)",
	destructive: "hsl(0 62.8% 30.6%)",
	destructiveForeground: "hsl(0 0% 98%)",
	border: "hsl(240 3.7% 15.9%)",
	input: "hsl(240 3.7% 15.9%)",
	ring: "hsl(240 4.9% 83.9%)",
	chart1: "hsl(220 70% 50%)",
	chart2: "hsl(160 60% 45%)",
	chart3: "hsl(30 80% 55%)",
	chart4: "hsl(280 65% 60%)",
	chart5: "hsl(340 75% 55%)",
});
