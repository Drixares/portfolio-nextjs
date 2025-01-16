import { StaticImageData } from "next/image";

export type ProjectLatest = {
    slug: string;
    title: string;
    image: StaticImageData;
};

export type Project = ProjectLatest & {
    links: {
        github: string;
        website: string;
    };
};
