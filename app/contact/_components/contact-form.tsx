"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "./input";
import SubmitButton from "./submit-button";
import submitContactForm from "@/actions/send-form";
import { ContactSchema } from "@/app/schema";
import { contactInputs, ContactSchemaType } from "@/types/contact-form";

const ContactForm = () => {
    const { register, handleSubmit, formState } = useForm<ContactSchemaType>({
        resolver: zodResolver(ContactSchema),
    });

    return (
        <form
            onSubmit={handleSubmit(submitContactForm)}
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
                    <SubmitButton formState={formState} />
                </div>
            </div>
        </form>
    );
};

export default ContactForm;
