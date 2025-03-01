import DinoDevinci from "@/app/assets/images/projects/404devinci.png";
import AdventCalendly from "@/app/assets/images/projects/advent-calendly.png";
import EligiusV from "@/app/assets/images/projects/eligiusv.png";
import Learn404 from "@/app/assets/images/projects/learn404.png";
import Pokedex from "@/app/assets/images/projects/pokedex.png";
import {
    AWS,
    CSS,
    DrizzleORM,
    Express,
    Git,
    Github,
    HTML,
    Javascript,
    Jest,
    Motion,
    Mux,
    NextJS,
    ReactJS,
    Redis,
    Resend,
    Stripe,
    Tailwind,
    Threejs,
    Typescript,
} from "@/components/icons/icons";
import { Project, ProjectCard, StackIcon, StackName } from "@/types/projects";

// The project library contains minimal information for cards display
export const PROJECTS_LIBRARY: Record<string, ProjectCard> = {
    "advent-calendly": {
        slug: "advent-calendly",
        title: "Advent Calendly",
        images: [AdventCalendly],
    },
    "learn404": {
        slug: "learn404",
        title: "Learn404",
        images: [Learn404],
    },
    "404devinci": {
        slug: "404devinci",
        title: "La 404 Devinci",
        images: [DinoDevinci],
    },
    "pokedex": {
        slug: "pokedex",
        title: "Pokedex",
        images: [Pokedex],
    },
    "eligiusv": {
        slug: "eligiusv",
        title: "EligiusV",
        images: [EligiusV],
    },
};

// Type for related projects using strings instead of ProjectCard objects
type ProjectWithStringRelated = Omit<Project, 'related'> & {
    related: [string, string];
};

// Create detailed project info with proper related projects structure as string slugs
const PROJECTS_WITH_STRING_RELATED: ProjectWithStringRelated[] = [
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
        slug: "learn404",
        service: "Web application",
        year: 2024,
        stack: ["Next.js", "TailwindCSS", "Typescript", "Stripe", "Mux"],
        title: "Learn404",
        description: `A course platform that I developed with a friend during the summer of 2024. 
            I learned NextJS, Typescript and TailwindCSS during this project (i've never used it before). 
            We also implemented Stripe and Mux to handle payments and video streaming respectively.`,
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
export const PROJECTS_WITH_INFOS: Project[] = PROJECTS_WITH_STRING_RELATED.map(project => ({
    ...project,
    related: project.related.map(slug => PROJECTS_LIBRARY[slug]).filter(Boolean)
}));

// Create a derived PROJECTS array from PROJECTS_WITH_INFOS for easier consumption
export const PROJECTS: Project[] = PROJECTS_WITH_INFOS;

export const STACK_ICONS: Record<StackName, StackIcon> = {
    Git: Git,
    Github: Github,
    AWS: AWS,
    Express: Express,
    Jest: Jest,
    Motion: Motion,
    "Next.js": NextJS,
    "React.js": ReactJS,
    TailwindCSS: Tailwind,
    Typescript: Typescript,
    HTML: HTML,
    CSS: CSS,
    Javascript: Javascript,
    Stripe: Stripe,
    Mux: Mux,
    DrizzleORM: DrizzleORM,
    Resend: Resend,
    Threejs: Threejs,
    Redis: Redis,
};  