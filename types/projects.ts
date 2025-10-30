import { StaticImageData } from "next/image";
import React from "react";

export type ProjectCard = {
	slug: string;
	title: string;
	images: StaticImageData[];
};

export type Project = ProjectCard & {
	service: string;
	description: string;
	year: number;
	stack: ProjectStack;
	collaborators: ProjectCollaborator[];
	links: ProjectLinks;
	related: ProjectCard[];
};

export type ProjectLinks = Record<string, string>;
export type ProjectCollaborator = {
	nickname: string;
	link: string;
};
export type ProjectStack = StackName[];
export type StackName =
	| "Git"
	| "Github"
	| "Next.js"
	| "Typescript"
	| "TailwindCSS"
	| "Motion"
	| "Jest"
	| "React.js"
	| "Express"
	| "AWS"
	| "HTML"
	| "CSS"
	| "Javascript"
	| "Stripe"
	| "Mux"
	| "DrizzleORM"
	| "Resend"
	| "Threejs"
	| "Redis"
	| "BetterAuth"
	| "Tanstack"
	| "TRPC";

export type StackIcon = React.ComponentType<React.SVGProps<SVGSVGElement>>;
