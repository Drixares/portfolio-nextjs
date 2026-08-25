"use client";

import submitContactForm from "@/actions/send-form";
import { bricolage_grotesk } from "@/app/font";
import { ContactSchema } from "@/app/schema";
import { withClassNames } from "@/lib/utils";
import { color, leading, text } from "@/styles/tokens.stylex";
import { contactInputs, ContactSchemaType } from "@/types/contact-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, WarningCircle } from "@phosphor-icons/react/dist/ssr";
import * as stylex from "@stylexjs/stylex";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import Input from "./input";
import SubmitButton from "./submit-button";

const styles = stylex.create({
    form: {
        marginTop: "4rem",
        width: "100%",
        fontSize: { default: text.lg, "@media (min-width: 640px) and (max-width: 1023.98px)": text.xl, "@media (min-width: 1024px)": text.xl2 },
        lineHeight: {
            default: leading.lg,
            "@media (min-width: 640px) and (max-width: 1023.98px)": leading.xl,
            "@media (min-width: 1024px)": leading.xl2,
        },
        display: "flex",
        flexDirection: "column",
        rowGap: "1rem",
    },
    actions: {
        display: "grid",
        gridTemplateColumns: {
            default: null,
            "@media (min-width: 640px)": "repeat(2, minmax(0, 1fr))",
        },
        paddingTop: { default: "1.5rem", "@media (min-width: 640px)": "5rem" },
    },
    successToast: {
        backgroundColor: color.emerald100,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: color.emerald50,
    },
    errorToast: {
        backgroundColor: color.rose100,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: color.rose50,
    },
});

const ContactForm = () => {
    const { register, handleSubmit, formState, reset } =
        useForm<ContactSchemaType>({
            resolver: zodResolver(ContactSchema),
        });

    const handleSubmitForm = async (data: ContactSchemaType) => {
        const response = await submitContactForm(data);
        if (response.success) {
            toast.success(response.message, {
                icon: <Check size={20} color="green" />,
                className: stylex.props(styles.successToast).className,
            });
            reset();
        } else {
            toast.error(
                response.message
                    ? response.message
                    : response.errors?.[0].message,
                {
                    icon: <WarningCircle size={20} color="red" />,
                    className: stylex.props(styles.errorToast).className,
                }
            );
        }
    };

    return (
        <form
            onSubmit={handleSubmit(handleSubmitForm)}
            {...withClassNames(
                stylex.props(styles.form),
                bricolage_grotesk.className
            )}
        >
            {contactInputs.map((input) => (
                <Input
                    key={input.name}
                    register={register}
                    placeholder={input.placeholder}
                    name={input.name}
                    label={input.label}
                />
            ))}
            <div {...stylex.props(styles.actions)}>
                <div />
                <div>
                    <SubmitButton formState={formState} />
                </div>
            </div>
        </form>
    );
};

export default ContactForm;
