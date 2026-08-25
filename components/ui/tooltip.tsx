"use client";

import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import * as stylex from "@stylexjs/stylex";
import * as React from "react";

import { withClassNames } from "@/lib/utils";
import { leading, radius, text, theme } from "@/styles/tokens.stylex";

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const enter = stylex.keyframes({
	from: {
		opacity: "var(--tooltip-enter-opacity)",
		transform:
			"translate3d(var(--tooltip-enter-x), var(--tooltip-enter-y), 0) scale3d(var(--tooltip-enter-scale), var(--tooltip-enter-scale), var(--tooltip-enter-scale))",
	},
});

const exit = stylex.keyframes({
	to: {
		opacity: 0,
		transform: "scale3d(0.95, 0.95, 0.95)",
	},
});

const styles = stylex.create({
	content: {
		zIndex: 50,
		overflow: "hidden",
		borderRadius: radius.sm,
		backgroundColor: theme.primary,
		paddingInline: "0.75rem",
		paddingBlock: "0.375rem",
		fontSize: text.xs,
		lineHeight: leading.xs,
		color: theme.primaryForeground,
		// Entry/exit motion, previously provided by `tailwindcss-animate`.
		"--tooltip-enter-opacity": 0,
		"--tooltip-enter-scale": 0.95,
		"--tooltip-enter-x": {
			default: "0",
			':is([data-side="left"])': "0.5rem",
			':is([data-side="right"])': "-0.5rem",
		},
		"--tooltip-enter-y": {
			default: "0",
			':is([data-side="top"])': "0.5rem",
			':is([data-side="bottom"])': "-0.5rem",
		},
		animationName: { default: enter, ':is([data-state="closed"])': exit },
		animationDuration: "150ms",
	},
});

type TooltipContentProps = Omit<
	React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>,
	"style"
> & {
	/** StyleX styles merged on top of the base tooltip styles. */
	style?: stylex.StyleXStyles;
	/** Plain class names (e.g. a `next/font` class) kept alongside StyleX. */
	className?: string;
};

const TooltipContent = React.forwardRef<
	React.ElementRef<typeof TooltipPrimitive.Content>,
	TooltipContentProps
>(({ style, className, sideOffset = 4, ...props }, ref) => (
	<TooltipPrimitive.Portal>
		<TooltipPrimitive.Content
			ref={ref}
			sideOffset={sideOffset}
			{...withClassNames(stylex.props(styles.content, style), className)}
			{...props}
		/>
	</TooltipPrimitive.Portal>
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
