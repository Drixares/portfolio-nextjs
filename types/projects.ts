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
    collaborators: ProjectCollaborator[];
    links: ProjectLinks;
};

export type ProjectLinks = {
    github?: string;
    website?: string;
};
export type ProjectCollaborator = {
    nickname: string;
    link: string;
};
export type ProjectStack = StackName[];
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
