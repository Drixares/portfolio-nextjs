"use client";

import { color, easing, font, leading, text, transition } from "@/styles/tokens.stylex";
import { ContactSchemaType } from "@/types/contact-form";
import { ArrowDownRight } from "@phosphor-icons/react/dist/ssr";
import * as stylex from "@stylexjs/stylex";
import { motion, Variants } from "motion/react";
import { FormState } from "react-hook-form";

interface SubmitButtonProps {
    formState: FormState<ContactSchemaType>;
}

const underlineVariants: Variants = {
    initial: {
        scaleX: 0,
    },
    hover: {
        scaleX: 1,
    },
    background: {
        height: "100%",
        transition: {
            delay: 0.5,
        },
    },
    exit: {
        scaleX: 0,
    },
};

const buttonVariants: Variants = {
    textColor: {
        color: "white",
        transition: {
            delay: 0.5,
        },
    },
};

const styles = stylex.create({
    button: {
        position: "relative",
        zIndex: 20,
        textTransform: "uppercase",
        fontSize: { default: text.xl3, "@media (min-width: 640px)": text.xl4 },
        lineHeight: { default: leading.xl3, "@media (min-width: 640px)": leading.xl4 },
        fontWeight: font.light,
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
        cursor: "pointer",
        transitionProperty: transition.colors,
        transitionDuration: "200ms",
        transitionTimingFunction: easing.inOut,
        outline: { default: null, ":focus": "none" },
    },
    disabled: {
        color: color.neutral400,
        pointerEvents: "none",
    },
    underline: {
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "1px",
        backgroundColor: color.neutral800,
        transformOrigin: "center",
        zIndex: -10,
    },
});

const SubmitButton = ({ formState }: SubmitButtonProps) => {
    const disabled = formState.isSubmitting || !formState.isValid;
    const underline = stylex.props(styles.underline);

    return (
        <motion.button
            type="submit"
            disabled={disabled}
            initial="initial"
            whileHover={["hover", "background", "textColor"]}
            whileFocus={["hover", "background", "textColor"]}
            variants={buttonVariants}
            {...stylex.props(styles.button, disabled && styles.disabled)}
        >
            <ArrowDownRight />
            {formState.isSubmitting ? "Sending..." : "Submit"}
            <motion.div
                className={underline.className}
                style={underline.style}
                variants={underlineVariants}
            />
        </motion.button>
    );
};

export default SubmitButton;
