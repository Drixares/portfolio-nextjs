import * as stylex from "@stylexjs/stylex";

/**
 * Responsive breakpoints, mirroring the defaults that used to come from
 * Tailwind:
 *
 *   sm  @media (min-width: 640px)
 *   md  @media (min-width: 768px)
 *   lg  @media (min-width: 1024px)
 *   xl  @media (min-width: 1280px)
 *
 * They are written inline as literal `@media` strings at every use site rather
 * than exported from here, because only a literal is statically resolvable by
 * the StyleX compiler — a `defineConsts` breakpoint reaches the bundler as an
 * unresolved reference, and rules that carry one keep the same priority, so the
 * larger breakpoint can lose to the smaller one purely on emission order.
 *
 * When a single property sets values at two or more breakpoints, cap each one
 * so the ranges do not overlap and order stops mattering, e.g.
 *
 *   fontSize: {
 *     default: text.xl4,
 *     "@media (min-width: 640px) and (max-width: 1023.98px)": text.xl6,
 *     "@media (min-width: 1024px)": text.xl7,
 *   }
 *
 * The upper bound stops 0.02px short of the next breakpoint. `…98px` rather
 * than `…99px`: Blink quantises media-query lengths to 1/64px, so `1023.99px`
 * rounds back up and would still match at exactly 1024px.
 *
 * The same 0.02px gap gives the `max-*` variants:
 *
 *   max-sm  @media (max-width: 639.98px)
 *   max-md  @media (max-width: 767.98px)
 */

/** Raw palette (previously the Tailwind `neutral` / `slate` / … scales). */
export const color = stylex.defineConsts({
	transparent: "transparent",
	white: "#ffffff",
	white80: "rgba(255, 255, 255, 0.8)",
	neutral50: "#fafafa",
	neutral100: "#f5f5f5",
	neutral200: "#e5e5e5",
	neutral200_70: "rgba(229, 229, 229, 0.7)",
	neutral300: "#d4d4d4",
	neutral400: "#a3a3a3",
	neutral500: "#737373",
	neutral600: "#525252",
	neutral700: "#404040",
	neutral800: "#262626",
	neutral900: "#171717",
	neutral950: "#0a0a0a",
	slate800: "#1e293b",
	emerald50: "#ecfdf5",
	emerald100: "#d1fae5",
	rose50: "#fff1f2",
	rose100: "#ffe4e6",
	/** Signature peach used across the site. */
	sand: "#f8dfcb",
	sand30: "rgba(248, 223, 203, 0.3)",
	sand50: "rgba(248, 223, 203, 0.5)",
});

/** Type scale. Each size pairs with the matching entry in `leading`. */
export const text = stylex.defineConsts({
	xs: "0.75rem",
	sm: "0.875rem",
	base: "1rem",
	lg: "1.125rem",
	xl: "1.25rem",
	xl2: "1.5rem",
	xl3: "1.875rem",
	xl4: "2.25rem",
	xl5: "3rem",
	xl6: "3.75rem",
	xl7: "4.5rem",
	xl8: "6rem",
	xl9: "8rem",
});

export const leading = stylex.defineConsts({
	xs: "1rem",
	sm: "1.25rem",
	base: "1.5rem",
	lg: "1.75rem",
	xl: "1.75rem",
	xl2: "2rem",
	xl3: "2.25rem",
	xl4: "2.5rem",
	none: "1",
	tight: "1.25",
});

export const font = stylex.defineConsts({
	light: "300",
	normal: "400",
	medium: "500",
	semibold: "600",
	bold: "700",
});

/** Corner radii, previously driven by the `--radius` custom property. */
export const radius = stylex.defineConsts({
	sm: "0.25rem",
	md: "0.375rem",
	lg: "0.5rem",
	full: "9999px",
});

export const shadow = stylex.defineConsts({
	md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
});

export const easing = stylex.defineConsts({
	inOut: "cubic-bezier(0.4, 0, 0.2, 1)",
});

/** Property lists matching the old `transition-*` utilities. */
export const transition = stylex.defineConsts({
	colors:
		"color, background-color, border-color, text-decoration-color, fill, stroke",
	transform: "transform",
});

/**
 * Semantic tokens. These keep the CSS-custom-property indirection the project
 * already relied on, so they stay themeable (see `styles/theme.ts`).
 */
export const theme = stylex.defineVars({
	background: "hsl(107 100% 98%)",
	foreground: "hsl(240 10% 3.9%)",
	card: "hsl(0 0% 100%)",
	cardForeground: "hsl(240 10% 3.9%)",
	popover: "hsl(0 0% 100%)",
	popoverForeground: "hsl(240 10% 3.9%)",
	primary: "hsl(240 5.9% 10%)",
	primaryForeground: "hsl(0 0% 98%)",
	secondary: "hsl(240 4.8% 95.9%)",
	secondaryForeground: "hsl(240 5.9% 10%)",
	muted: "hsl(240 4.8% 95.9%)",
	mutedForeground: "hsl(240 3.8% 46.1%)",
	accent: "hsl(240 4.8% 95.9%)",
	accentForeground: "hsl(240 5.9% 10%)",
	destructive: "hsl(0 84.2% 60.2%)",
	destructiveForeground: "hsl(0 0% 98%)",
	border: "hsl(240 5.9% 90%)",
	input: "hsl(240 5.9% 90%)",
	ring: "hsl(240 10% 3.9%)",
	chart1: "hsl(12 76% 61%)",
	chart2: "hsl(173 58% 39%)",
	chart3: "hsl(197 37% 24%)",
	chart4: "hsl(43 74% 66%)",
	chart5: "hsl(27 87% 67%)",
});
