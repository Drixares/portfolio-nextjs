"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "./input";
import { ArrowDownRight } from "@phosphor-icons/react/dist/ssr";
import { motion, Variants } from "motion/react";

const contactSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    company: z.string().optional(),
    service: z.string().optional(),
    role: z.string().optional(),
    budget: z.string(),
    message: z.string(),
});

export type ContactSchemaType = z.infer<typeof contactSchema>;
export type InputName = (typeof contactInputs)[number]["name"];

const contactInputs = [
    {
        label: "Your Name",
        name: "name",
        placeholder: "John Doe",
    },
    {
        label: "Your Email",
        name: "email",
        placeholder: "example@gmail.com",
    },
    {
        label: "Your Company",
        name: "company",
        placeholder: "Company Name",
    },
    {
        label: "Your Role",
        name: "role",
        placeholder: "Position at your Company",
    },
    {
        label: "Service",
        name: "service",
        placeholder: "Select a type of Service",
    },
    {
        label: "Budget",
        name: "budget",
        placeholder: "Select a Budget",
    },
    {
        label: "Your Message",
        name: "message",
        placeholder: "Please describe your project and expected services",
    },
] as const;

const variants: Variants = {
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
};

const ContactForm = () => {
    const { register, handleSubmit, formState } = useForm<ContactSchemaType>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = (data: z.infer<typeof contactSchema>) => {
        alert(JSON.stringify(data));
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-16 w-full text-2xl space-y-4"
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
            <div className="grid grid-cols-2 pt-20">
                <div />
                <div>
                    <motion.button
                        type="submit"
                        onSubmit={handleSubmit(onSubmit)}
                        disabled={formState.isSubmitting || !formState.isValid}
                        initial="initial"
                        whileHover={["hover", "background", "textColor"]}
                        variants={{
                            textColor: {
                                color: "white",
                                transition: {
                                    delay: 0.5,
                                },
                            },
                        }}
                        className="relative z-20 group uppercase text-4xl font-light flex items-center gap-3 
                        cursor-pointer"
                    >
                        <ArrowDownRight />
                        Submit
                        <motion.div
                            className="absolute bottom-0 left-0 w-full h-px bg-neutral-800
                            origin-center -z-10"
                            variants={variants}
                        />
                    </motion.button>
                </div>
            </div>
        </form>
    );
};

export default ContactForm;
