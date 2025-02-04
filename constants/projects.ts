import AdventCalendly from "@/app/assets/images/projects/advent-calendly.png";
import Learn404 from "@/app/assets/images/projects/learn404.png";
import DinoDevinci from "@/app/assets/images/projects/404devinci.png";
import Pokedex from "@/app/assets/images/projects/pokedex.png";
import EligiusV from "@/app/assets/images/projects/eligiusv.png";
import { Project, ProjectCard, StackIcon, StackName } from "@/types/projects";
import {
    AWS,
    CSS,
    Express,
    FramerMotion,
    HTML,
    Javascript,
    Jest,
    NextJS,
    ReactJS,
    Tailwind,
    Typescript,
} from "@/components/icons/icons";
import { ReactElement, SVGProps } from "react";

export const latestsProjects: ProjectCard[] = [
    {
        slug: "advent-calendy",
        title: "Advent Calendly",
        images: [AdventCalendly],
    },
    {
        slug: "learn404",
        title: "Learn404",
        images: [Learn404],
    },
    {
        slug: "404devinci",
        title: "La 404 Devinci",
        images: [DinoDevinci],
    },
];

export const allProjects: Project[] = [
    {
        slug: "advent-calendy",
        service: "Web application",
        year: 2024,
        stack: [
            "React.js",
            "Express",
            "Typescript",
            "TailwindCSS",
            "Jest",
            "AWS",
        ],
        title: "Advent Calendly",
        description:
            "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla.",
        collaborators: [
            {
                nickname: "La404devinci",
                link: "https://404devinci.fr",
            },
        ],
        images: [AdventCalendly],
        links: {
            github: "https://github.com/drixares",
            website: "",
        },
        related: [],
    },
    {
        slug: "learn404",
        service: "Web application",
        year: 2024,
        stack: ["Next.js", "TailwindCSS", "Typescript"],
        title: "Learn404",
        description:
            "A course platform that I developed with a friend during the summer of 2024.",
        collaborators: [
            {
                nickname: "Nicolas",
                link: "https://github.com/miicolas",
            },
        ],
        images: [Learn404],
        links: {
            github: "https://github.com/drixares",
        },
        related: [],
    },
    {
        slug: "404devinci",
        service: "Website",
        year: 2024,
        stack: ["Next.js", "TailwindCSS", "Typescript", "Motion"],
        title: "La 404 Devinci",
        description: "",
        collaborators: [
            {
                nickname: "La404devinci",
                link: "https://404devinci.fr",
            },
        ],
        images: [DinoDevinci],
        links: {
            github: "https://github.com/drixares",
            website: "https://404devinci.fr",
        },
        related: [],
    },
    {
        slug: "pokedex",
        service: "Website",
        year: 2024,
        stack: ["HTML", "CSS", "Javascript"],
        title: "Pokedex",
        description: "",
        collaborators: [],
        images: [Pokedex],
        links: {
            github: "https://github.com/drixares",
        },
        related: [],
    },
    {
        slug: "eligiusv",
        service: "Website",
        year: 2023,
        stack: ["HTML", "CSS", "Javascript"],
        title: "EligiusV (eSport)",
        description: "",
        collaborators: [],
        images: [EligiusV],
        links: {
            github: "https://github.com/drixares",
            website: "https://eligiusv.fr",
        },
        related: [],
    },
];

export const STACK_ICONS: Record<StackName, StackIcon> = {
    AWS: AWS,
    Express: Express,
    Jest: Jest,
    Motion: FramerMotion,
    "Next.js": NextJS,
    "React.js": ReactJS,
    TailwindCSS: Tailwind,
    Typescript: Typescript,
    HTML: HTML,
    CSS: CSS,
    Javascript: Javascript,
};

export type Icon = (props: SVGProps<SVGSVGElement>) => ReactElement;
