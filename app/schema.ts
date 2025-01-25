import { z } from "zod";

export const ContactSchema = z.object({
    name: z.string().nonempty(),
    email: z.string().email(),
    company: z.string().optional(),
    service: z.string().optional(),
    role: z.string().optional(),
    budget: z.string().optional(),
    message: z.string().nonempty(),
});
