import path from "node:path";

const rootDir = process.cwd();

/** @type {import('postcss-load-config').Config} */
const config = {
	plugins: {
		"@stylexswc/postcss-plugin": {
			include: [
				"app/**/*.{ts,tsx}",
				"components/**/*.{ts,tsx}",
				"constants/**/*.{ts,tsx}",
				"hooks/**/*.{ts,tsx}",
				"lib/**/*.{ts,tsx}",
				"styles/**/*.{ts,tsx}",
			],
			rsOptions: {
				dev: process.env.NODE_ENV === "development",
				// Overlapping `min-width` queries are written as explicit, disjoint ranges at
				// the use sites instead (see `styles/tokens.stylex.ts`): the compiler's own
				// narrowing ends at `…99px`, which Blink rounds back up to the breakpoint,
				// so both rules match at exactly 640/768/1024px.
				enableMediaQueryOrder: false,
				aliases: {
					"@/*": [path.join(rootDir, "*")],
				},
				unstable_moduleResolution: {
					type: "commonJS",
					rootDir,
				},
			},
		},
	},
};

export default config;
