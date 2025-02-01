import { StaticImageData } from "next/image";
import React from "react";

export type ProjectLatest = {
    slug: string;
    title: string;
    images: StaticImageData[];
};

export type Project = ProjectLatest & {
    service: string;
    description: string;
    year: number;
    stack: ProjectStack;
    collaborators: string[];
    links: {
        github?: string;
        website?: string;
    };
};

export type ProjectStack = Partial<Record<StackName, StackIcon>>;
export type StackName =
    | "Next.js"
    | "TypeScript"
    | "TailwindCSS"
    | "Motion"
    | "Jest"
    | "React.js"
    | "Express"
    | "AWS";

export type StackIcon = React.ComponentType<React.SVGProps<SVGSVGElement>>;
