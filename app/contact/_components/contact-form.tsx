"use client";

import submitContactForm from "@/actions/send-form";
import { bricolage_grotesk } from "@/app/font";
import { ContactSchema } from "@/app/schema";
import { cn } from "@/lib/utils";
import { contactInputs, ContactSchemaType } from "@/types/contact-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, WarningCircle } from "@phosphor-icons/react/dist/ssr";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import Input from "./input";
import SubmitButton from "./submit-button";

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
            className={cn(
                "mt-16 w-full text-lg sm:text-xl lg:text-2xl space-y-4",
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
            <div className="grid sm:grid-cols-2 pt-6 sm:pt-20">
                <div />
                <div>
                    <SubmitButton formState={formState} />
                </div>
            </div>
        </form>
    );
};

export default ContactForm;
