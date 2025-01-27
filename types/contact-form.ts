import { ContactSchema } from "@/app/schema";
import { z, ZodIssue } from "zod";

export const contactInputs = [
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

export type ContactSchemaType = z.infer<typeof ContactSchema>;
export type InputName = (typeof contactInputs)[number]["name"];
export type FormResponse = {
    success: boolean;
    errors?: ZodIssue[];
    message?: string;
};
