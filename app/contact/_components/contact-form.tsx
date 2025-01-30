"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "./input";
import SubmitButton from "./submit-button";
import submitContactForm from "@/actions/send-form";
import { ContactSchema } from "@/app/schema";
import { contactInputs, ContactSchemaType } from "@/types/contact-form";
import { toast } from "sonner";
import { Check, WarningCircle } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";
import { fraunes } from "@/app/font";

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
                className: "bg-emerald-100 border border-emerald-50",
            });
            reset();
        } else {
            toast.error(
                response.message
                    ? response.message
                    : response.errors?.[0].message,
                {
                    icon: <WarningCircle size={20} color="red" />,
                    className: "bg-rose-100 border border-rose-50",
                }
            );
        }
    };

    return (
        <form
            onSubmit={handleSubmit(handleSubmitForm)}
            className={cn("mt-16 w-full text-2xl space-y-4", fraunes.className)}
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
