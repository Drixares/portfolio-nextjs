import {
	AmazonWebServicesLight,
	BetterAuthLight,
	CSS,
	DrizzleORMLight,
	ExpressjsLight,
	Git,
	GitHubLight,
	HTML5,
	JavaScript,
	Jest,
	MotionLight,
	Nextjs,
	ReactLight,
	Redis,
	ResendLight,
	Stripe,
	TailwindCSS,
	TanStack,
	ThreejsLight,
	TRPC,
	TypeScript,
} from "@ridemountainpig/svgl-react";
import DinoDevinci from "@/app/assets/images/projects/404devinci.png";
import AdventCalendly from "@/app/assets/images/projects/advent-calendly.png";
import Altiora from "@/app/assets/images/projects/altiora.png";
import Directory from "@/app/assets/images/projects/directory.png";
import EligiusV from "@/app/assets/images/projects/eligiusv.png";
import ImpulseLab from "@/app/assets/images/projects/impulselab.png";
import Learn404 from "@/app/assets/images/projects/learn404.png";
import Linkfolio from "@/app/assets/images/projects/linkfolio.png";
import Pokedex from "@/app/assets/images/projects/pokedex.png";
import { Mux } from "@/components/icons/icons";
import type {
	Project,
	ProjectCard,
	StackIcon,
	StackName,
} from "@/types/projects";

// The project library contains minimal information for cards display
export const PROJECTS_LIBRARY: Record<string, ProjectCard> = {
	directory: {
		slug: "directory",
		title: "Directory",
		images: [Directory],
	},
	impulselab: {
		slug: "impulselab",
		title: "Impulse Lab",
		images: [ImpulseLab],
	},
	altiora: {
		slug: "altiora",
		title: "Altiora",
		images: [Altiora],
	},
	learn404: {
		slug: "learn404",
		title: "Learn404",
		images: [Learn404],
	},
	"404devinci": {
		slug: "404devinci",
		title: "La 404 Devinci",
		images: [DinoDevinci],
	},
	"advent-calendly": {
		slug: "advent-calendly",
		title: "Advent Calendly",
		images: [AdventCalendly],
	},
	pokedex: {
		slug: "pokedex",
		title: "Pokedex",
		images: [Pokedex],
	},
	eligiusv: {
		slug: "eligiusv",
		title: "EligiusV",
		images: [EligiusV],
	},
};

// Type for related projects using strings instead of ProjectCard objects
type ProjectWithStringRelated = Omit<Project, "related"> & {
	related: [string, string];
};

// Create detailed project info with proper related projects structure as string slugs
const PROJECTS_WITH_STRING_RELATED: ProjectWithStringRelated[] = [
	{
		slug: "linkfolio",
		service: "Web application",
		year: 2025,
		stack: [
			"Next.js",
			"TailwindCSS",
			"Typescript",
			"DrizzleORM",
			"Tanstack",
			"TRPC",
			"DrizzleORM",
		],
		title: "Linkfolio",
		description:
			"Showcase your projects and experiences with a professional portfolio website in minutes.",
		collaborators: [
			{
				link: "https://impulselab.ai?utm_source=matteo-marchelli.com",
				nickname: "Impulse Lab",
			},
		],
		images: [Linkfolio],
		links: {
			website: "https://linkfolio.ai?utm_source=matteo-marchelli.com",
		},
		related: ["altiora", "directory"],
	},
	{
		slug: "altiora",
		service: "Web application",
		year: 2025,
		stack: [
			"Next.js",
			"TailwindCSS",
			"Tanstack",
			"Typescript",
			"Stripe",
			"DrizzleORM",
		],
		title: "Altiora",
		description:
			"A complete platform for traders to manage their journals, goals, habits and more.",
		collaborators: [
			{
				link: "https://github.com/17sx",
				nickname: "17sx",
			},
		],
		images: [Altiora],
		links: {
			website: "https://altiora.pro",
		},
		related: ["directory", "learn404"],
	},
	{
		slug: "impulselab",
		service: "Website",
		year: 2025,
		stack: ["Next.js", "TailwindCSS", "Typescript"],
		title: "Impulse Lab",
		description:
			"Impulse Lab's website. A company that provides AI solutions to businesses.",
		collaborators: [
			{
				nickname: "Impulse Lab",
				link: "https://impulselab.ai?utm_source=matteo-marchelli.com",
			},
		],
		images: [ImpulseLab],
		links: {
			website: "https://impulselab.ai?utm_source=matteo-marchelli.com",
		},
		related: ["directory", "linkfolio"],
	},
	{
		slug: "directory",
		service: "Website",
		year: 2024,
		stack: [
			"Next.js",
			"Motion",
			"Redis",
			"Typescript",
			"Resend",
			"BetterAuth",
			"Tanstack",
			"TRPC",
		],
		title: "Impulse Directory",
		description:
			"Librairy of prompts for AI agents with organizations, CLI commands and more.",
		collaborators: [
			{
				nickname: "Impulse Lab",
				link: "https://impulselab.ai?utm_source=matteo-marchelli.com",
			},
		],
		images: [Directory],
		links: {
			website: "https://impulse.directory?utm_source=matteo-marchelli.com",
		},
		related: ["404devinci", "advent-calendly"],
	},
	{
		slug: "learn404",
		service: "Web application",
		year: 2024,
		stack: ["Next.js", "TailwindCSS", "Typescript", "Stripe", "Mux"],
		title: "Learn404",
		description: `A course platform that I developed with a friend during the summer of 2024. 
            It was my first time working with NextJS, Typescript and TailwindCSS during this project. 
            We also have implemented Stripe and Mux to handle payments and video streaming.`,
		collaborators: [
			{
				nickname: "Nicolas",
				link: "https://github.com/miicolas",
			},
		],
		images: [Learn404],
		links: {
			github: "https://github.com/learn404/Learn404",
		},
		related: ["404devinci", "advent-calendly"],
	},
	{
		slug: "404devinci",
		service: "Website",
		year: 2024,
		stack: ["Next.js", "TailwindCSS", "Typescript", "Motion"],
		title: "La 404 Devinci",
		description:
			"Website of the 404 Devinci school association. First time using Motion (Framer Motion) on this one and it helped me trained my animation skills",
		collaborators: [
			{
				nickname: "La404devinci",
				link: "https://404devinci.fr",
			},
		],
		images: [DinoDevinci],
		links: {
			github: "https://github.com/La-404-Devinci/website",
			website: "https://404devinci.fr",
		},
		related: ["advent-calendly", "learn404"],
	},
	{
		slug: "advent-calendly",
		service: "Web application",
		year: 2024,
		stack: [
			"React.js",
			"Express",
			"Typescript",
			"TailwindCSS",
			"Jest",
			"AWS",
			"DrizzleORM",
			"Redis",
		],
		title: "Advent Calendly",
		description: `A project that was La 404 Devinci advent calendar, where you can discover 
            new challenges every day and take part in a competition with your club.`,
		collaborators: [
			{
				nickname: "La404devinci",
				link: "https://github.com/La-404-Devinci",
			},
		],
		images: [AdventCalendly],
		links: {
			frontend: "https://github.com/La-404-Devinci/advent-daily-frontend",
			backend: "https://github.com/La-404-Devinci/advent-daily-backend",
		},
		related: ["404devinci", "learn404"],
	},
	{
		slug: "pokedex",
		service: "Website",
		year: 2024,
		stack: ["HTML", "CSS", "Javascript"],
		title: "Pokedex",
		description:
			"The second Pokedex i've done because the first one was not optimized so i did implement caching on this one.",
		collaborators: [],
		images: [Pokedex],
		links: {
			github: "https://github.com/Drixares/projet-pokedex",
		},
		related: ["404devinci", "advent-calendly"],
	},
	{
		slug: "eligiusv",
		service: "Website",
		year: 2023,
		stack: ["HTML", "CSS", "Javascript"],
		title: "EligiusV (eSport)",
		description:
			"Website of the eSport association under law 1901 - EligiusV. It was the first website i've published. I didn't use Git at this time...💀",
		collaborators: [],
		images: [EligiusV],
		links: {
			website: "https://eligiusv.fr",
		},
		related: ["404devinci", "advent-calendly"],
	},
];

// Convert string related slugs to actual ProjectCard objects
export const PROJECTS_WITH_INFOS = PROJECTS_WITH_STRING_RELATED.map(
	(project) => ({
		...project,
		related: project.related
			.map((slug) => PROJECTS_LIBRARY[slug])
			.filter(Boolean),
	}),
);

// Create a derived PROJECTS array from PROJECTS_WITH_INFOS for easier consumption
export const PROJECTS = PROJECTS_WITH_INFOS;

export const STACK_ICONS: Record<StackName, StackIcon> = {
	Git: Git,
	Github: GitHubLight,
	AWS: AmazonWebServicesLight,
	Express: ExpressjsLight,
	Jest: Jest,
	Motion: MotionLight,
	"Next.js": Nextjs,
	"React.js": ReactLight,
	TailwindCSS: TailwindCSS,
	Typescript: TypeScript,
	HTML: HTML5,
	CSS: CSS,
	Javascript: JavaScript,
	Stripe: Stripe,
	Mux: Mux,
	DrizzleORM: DrizzleORMLight,
	Resend: ResendLight,
	Threejs: ThreejsLight,
	Redis: Redis,
	BetterAuth: BetterAuthLight,
	Tanstack: TanStack,
	TRPC: TRPC,
};
