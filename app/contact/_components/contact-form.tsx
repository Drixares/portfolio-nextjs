"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "./input";
import SubmitButton from "./submit-button";

export const contactSchema = z.object({
    name: z.string().nonempty(),
    email: z.string().email(),
    company: z.string().optional(),
    service: z.string().optional(),
    role: z.string().optional(),
    budget: z.string().optional(),
    message: z.string().nonempty(),
});

export type ContactSchemaType = z.infer<typeof contactSchema>;
export type InputName = (typeof contactInputs)[number]["name"];

const contactInputs = [
    {
        label: "Your Name *",
        name: "name",
        placeholder: "John Doe",
    },
    {
        label: "Your Email *",
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
        label: "Your Message *",
        name: "message",
        placeholder: "Please describe your project and expected services",
    },
] as const;

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
                    <SubmitButton
                        onSubmit={onSubmit}
                        handleSubmit={handleSubmit}
                        formState={formState}
                    />
                </div>
            </div>
        </form>
    );
};

export default ContactForm;
