"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const contactSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    company: z.string().optional(),
    service: z.string().optional(),
    role: z.string().optional(),
    budget: z.string(),
    message: z.string(),
});

type ContactSchemaType = z.infer<typeof contactSchema>;

const ContactForm = () => {
    const { register, handleSubmit } = useForm<ContactSchemaType>({
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
            <div className="group relative w-full grid grid-cols-2 items-center gap-4 h-20 border-t border-neutral-300">
                <label htmlFor="name" className="text-neutral-800">
                    Your Name
                </label>
                <input
                    type="text"
                    id="name"
                    {...register("name")}
                    placeholder="John Doe"
                    className="bg-transparent outline-none placeholder:text-neutral-400"
                />
                <div
                    className="w-0 bg-neutral-800 group-hover:w-full transition-[width] duration-500 h-[0.75px] absolute
                    -top-[1px] left-0 z-10"
                />
            </div>
            <div className="group relative w-full grid grid-cols-2 items-center gap-4 h-20 border-t border-neutral-300">
                <label htmlFor="email" className="text-neutral-800">
                    Your Email
                </label>
                <input
                    type="text"
                    id="email"
                    {...register("email")}
                    placeholder="example@gmail.com"
                    className="bg-transparent outline-none placeholder:text-neutral-400"
                />
                <div
                    className="w-0 bg-neutral-800 group-hover:w-full transition-[width] duration-500 h-[0.75px] absolute
                    -top-[1px] left-0 z-10"
                />
            </div>
            <div className="group relative w-full grid grid-cols-2 items-center gap-4 h-20 border-t border-neutral-300">
                <label htmlFor="company" className="text-neutral-800">
                    Your Company
                </label>
                <input
                    type="text"
                    id="company"
                    {...register("company")}
                    placeholder="Company Name"
                    className="bg-transparent outline-none placeholder:text-neutral-400"
                />
                <div
                    className="w-0 bg-neutral-800 group-hover:w-full transition-[width] duration-500 h-[0.75px] absolute
                    -top-[1px] left-0 z-10"
                />
            </div>
            <div className="group relative w-full grid grid-cols-2 items-center gap-4 h-20 border-t border-neutral-300">
                <label htmlFor="role" className="text-neutral-800">
                    Your Role
                </label>
                <input
                    type="text"
                    id="role"
                    {...register("role")}
                    placeholder="Position at your Company"
                    className="bg-transparent outline-none placeholder:text-neutral-400"
                />
                <div
                    className="w-0 bg-neutral-800 group-hover:w-full transition-[width] duration-500 h-[0.75px] absolute
                    -top-[1px] left-0 z-10"
                />
            </div>
            <div className="group relative w-full grid grid-cols-2 items-center gap-4 h-20 border-t border-neutral-300">
                <label htmlFor="service" className="text-neutral-800">
                    Service
                </label>
                <input
                    type="text"
                    id="service"
                    {...register("service")}
                    placeholder="Select a type of Service"
                    className="bg-transparent outline-none placeholder:text-neutral-400"
                />
                <div
                    className="w-0 bg-neutral-800 group-hover:w-full transition-[width] duration-500 h-[0.75px] absolute
                    -top-[1px] left-0 z-10"
                />
            </div>
            <div className="group relative w-full grid grid-cols-2 items-center gap-4 h-20 border-t border-neutral-300">
                <label htmlFor="budget" className="text-neutral-800">
                    Budget
                </label>
                <input
                    type="text"
                    id="budget"
                    {...register("budget")}
                    placeholder="Select a Budget"
                    className="bg-transparent outline-none placeholder:text-neutral-400"
                />
                <div
                    className="w-0 bg-neutral-800 group-hover:w-full transition-[width] duration-500 h-[0.75px] absolute
                    -top-[1px] left-0 z-10"
                />
            </div>
            <div className="group relative w-full grid grid-cols-2  items-center gap-4 h-20 border-t border-neutral-300">
                <label htmlFor="message" className="text-neutral-800">
                    Your Message
                </label>
                <input
                    type="text"
                    id="message"
                    {...register("message")}
                    placeholder="Please describe your project and expected services"
                    className="bg-transparent outline-none placeholder:text-neutral-400"
                />
                <div
                    className="w-0 bg-neutral-800 group-hover:w-full transition-[width] duration-500 h-[0.75px] absolute
                    -top-[1px] left-0 z-10"
                />
            </div>
        </form>
    );
};

export default ContactForm;
