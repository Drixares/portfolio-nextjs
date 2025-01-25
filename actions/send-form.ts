"use server";

import { ContactSchema } from "@/app/schema";
import notion from "@/lib/notion";
import { ContactSchemaType, FormResponse } from "@/types/contact-form";

const submitContactForm = async (
    data: ContactSchemaType
): Promise<FormResponse> => {
    try {
        // Server side validation
        const parsedData = ContactSchema.safeParse(data);

        if (!parsedData.success) {
            return {
                success: false,
                errors: parsedData.error.errors,
            };
        }

        // We check if the user has already sent a message this week
        const page = await notion.databases.query({
            database_id: process.env.NOTION_DATABASE_ID!,
            filter: {
                and: [
                    {
                        property: "Email",
                        email: {
                            equals: data.email,
                        },
                    },
                    {
                        property: "Sent",
                        created_time: {
                            this_week: {},
                        },
                    },
                ],
            },
        });

        // If the user has already sent a message this week, we return an error
        if (page.results.length > 0) {
            return {
                success: false,
                message: "You have already sent a message this week.",
            };
        }

        // We create the page in the Notion database
        await notion.pages.create({
            parent: {
                database_id: process.env.NOTION_DATABASE_ID!,
            },
            properties: {
                Title: {
                    type: "title",
                    title: [
                        {
                            type: "text",
                            text: {
                                content: `Message from ${data.name}`,
                            },
                        },
                    ],
                },
                Email: {
                    type: "email",
                    email: data.email,
                },
                Name: {
                    type: "rich_text",
                    rich_text: [
                        {
                            type: "text",
                            text: {
                                content: data.name || "",
                            },
                        },
                    ],
                },
                Company: {
                    type: "rich_text",
                    rich_text: [
                        {
                            type: "text",
                            text: {
                                content: data.company || "",
                            },
                        },
                    ],
                },
                Role: {
                    type: "rich_text",
                    rich_text: [
                        {
                            type: "text",
                            text: {
                                content: data.role || "",
                            },
                        },
                    ],
                },
                Service: {
                    type: "rich_text",
                    rich_text: [
                        {
                            type: "text",
                            text: {
                                content: data.service || "",
                            },
                        },
                    ],
                },
                Budget: {
                    type: "number",
                    number: Number(data.budget),
                },
            },
            children: [
                {
                    object: "block",
                    type: "paragraph",
                    paragraph: {
                        rich_text: [
                            {
                                type: "text",
                                text: {
                                    content: data.message,
                                },
                            },
                        ],
                    },
                },
            ],
        });

        return {
            success: true,
            message:
                "Your message has been sent successfully. I will respond as soon as possible.",
        };
    } catch (error) {
        console.debug(error);
        return {
            success: false,
            message: "Something went wrong. Please try again later.",
        };
    }
};

export default submitContactForm;
