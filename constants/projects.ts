import AdventCalendly from "@/app/assets/images/projects/advent-calendly.png";
import Learn404 from "@/app/assets/images/projects/learn404.png";
import DinoDevinci from "@/app/assets/images/projects/404devinci.png";
import Pokedex from "@/app/assets/images/projects/pokedex.png";
import EligiusV from "@/app/assets/images/projects/eligiusv.png";
import { Project, ProjectLatest, StackName } from "@/types/projects";
import { MdiGit } from "@/components/icons/icons";
import { ReactElement, SVGProps } from "react";

export const latestsProjects: ProjectLatest[] = [
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
            "TypeScript",
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
    },
    {
        slug: "learn404",
        service: "Web application",
        year: 2024,
        stack: [],
        title: "Learn404",
        description:
            "A course platform that I developed with a friend during the summer of 2024.",
        collaborators: [
            {
                nickname: "La404devinci",
                link: "https://404devinci.fr",
            },
        ],
        images: [Learn404],
        links: {
            github: "https://github.com/drixares",
        },
    },
    {
        slug: "404devinci",
        service: "Website",
        year: 2024,
        stack: [],
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
    },
    {
        slug: "pokedex",
        service: "Website",
        year: 2024,
        stack: [],
        title: "Pokedex",
        description: "",
        collaborators: [],
        images: [Pokedex],
        links: {
            github: "https://github.com/drixares",
        },
    },
    {
        slug: "eligiusv",
        service: "Website",
        year: 2023,
        stack: [],
        title: "EligiusV (eSport)",
        description: "",
        collaborators: [],
        images: [EligiusV],
        links: {
            github: "https://github.com/drixares",
            website: "https://eligiusv.fr",
        },
    },
];

export const STACK_ICONS: Record<StackName, React.ComponentType> = {
    AWS: MdiGit,
    Express: MdiGit,
    Jest: MdiGit,
    Motion: MdiGit,
    "Next.js": MdiGit,
    "React.js": MdiGit,
    TailwindCSS: MdiGit,
    TypeScript: MdiGit,
};

export type Icon = (props: SVGProps<SVGSVGElement>) => ReactElement;
