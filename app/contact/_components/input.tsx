import {
    color,
    easing,
    leading,
    text,
    transition,
} from "@/styles/tokens.stylex";
import { ContactSchemaType, InputName } from "@/types/contact-form";
import * as stylex from "@stylexjs/stylex";
import { useForm } from "react-hook-form";

interface InputProps {
    register: ReturnType<typeof useForm<ContactSchemaType>>["register"];
    placeholder: string;
    name: InputName;
    label: string;
}

const styles = stylex.create({
    field: {
        position: "relative",
        width: "100%",
        display: "grid",
        gridTemplateColumns: {
            default: "repeat(1, minmax(0, 1fr))",
            "@media (min-width: 640px)": "repeat(2, minmax(0, 1fr))",
        },
        alignItems: "center",
        paddingInline: "0.75rem",
        columnGap: "1rem",
        paddingBlock: {
            default: 0,
            "@media (max-width: 639.98px)": "0.5rem",
        },
        height: { default: null, "@media (min-width: 640px)": "5rem" },
        borderTopWidth: 1,
        borderTopStyle: "solid",
        // Replaces `has-[:focus]:border-neutral-800`.
        borderTopColor: {
            default: color.neutral300,
            ":focus-within": color.neutral800,
        },
        transitionProperty: transition.colors,
        transitionDuration: "150ms",
        transitionTimingFunction: easing.inOut,
    },
    label: {
        color: color.neutral800,
    },
    control: {
        backgroundColor: color.transparent,
        outline: "none",
        "::placeholder": {
            color: color.neutral400,
            fontSize: { default: null, "@media (max-width: 639.98px)": text.base },
            lineHeight: { default: null, "@media (max-width: 639.98px)": leading.base },
        },
    },
    textarea: {
        paddingTop: { default: null, "@media (min-width: 640px)": "1.5rem" },
        resize: "none",
    },
});

const Input = ({ register, placeholder, name, label }: InputProps) => {
    return (
        <div {...stylex.props(styles.field)}>
            <label htmlFor={name} {...stylex.props(styles.label)}>
                {label}
            </label>
            {name === "message" ? (
                <textarea
                    id={name}
                    {...register(name)}
                    placeholder={placeholder}
                    {...stylex.props(styles.control, styles.textarea)}
                />
            ) : (
                <input
                    type="text"
                    id={name}
                    {...register(name)}
                    placeholder={placeholder}
                    {...stylex.props(styles.control)}
                />
            )}
        </div>
    );
};

export default Input;
