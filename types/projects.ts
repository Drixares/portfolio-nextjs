import { StaticImageData } from "next/image";

export type ProjectLatest = {
    slug: string;
    title: string;
    images: StaticImageData[];
};

export type Project = ProjectLatest & {
    description: string;
    collaborators: string[];
    links: {
        github?: string;
        website?: string;
    };
};
