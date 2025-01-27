"use client";

import { motion, Variants } from "motion/react";
import { FormState } from "react-hook-form";
import { ArrowDownRight } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";
import { ContactSchemaType } from "@/types/contact-form";

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

const SubmitButton = ({ formState }: SubmitButtonProps) => {
    return (
        <motion.button
            type="submit"
            disabled={formState.isSubmitting || !formState.isValid}
            initial="initial"
            whileHover={["hover", "background", "textColor"]}
            whileFocus={["hover", "background", "textColor"]}
            variants={buttonVariants}
            className={cn(
                `relative z-20 group uppercase text-4xl font-light flex items-center gap-3 
                cursor-pointer transition-colors duration-200 focus:outline-none`,
                (formState.isSubmitting || !formState.isValid) &&
                    "!text-neutral-400 pointer-events-none"
            )}
        >
            <ArrowDownRight />
            {formState.isSubmitting ? "Sending..." : "Submit"}
            <motion.div
                className="absolute bottom-0 left-0 w-full h-px bg-neutral-800
            origin-center -z-10"
                variants={underlineVariants}
            />
        </motion.button>
    );
};

export default SubmitButton;
