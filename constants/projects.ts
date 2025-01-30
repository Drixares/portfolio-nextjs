import AdventCalendly from "@/app/assets/images/projects/advent-calendly.png";
import Learn404 from "@/app/assets/images/projects/learn404.png";
import DinoDevinci from "@/app/assets/images/projects/404devinci.png";
import Pokedex from "@/app/assets/images/projects/pokedex.png";
import EligiusV from "@/app/assets/images/projects/eligiusv.png";
import { Project, ProjectLatest } from "@/types/projects";

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
        description: "",
        collaborators: ["Nicolas", "Michel", "Paul", "Mathilde"],
        title: "Advent Calendly",
        images: [AdventCalendly],
        links: {
            github: "https://github.com/drixares",
            website: "",
        },
    },
    {
        slug: "learn404",
        description:
            "A course platform that I developed with a friend during the summer of 2024.",
        collaborators: ["Nicolas"],
        title: "Learn404",
        images: [Learn404],
        links: {
            github: "https://github.com/drixares",
        },
    },
    {
        slug: "404devinci",
        description: "",
        collaborators: ["Nicolas", "Michel"],
        title: "La 404 Devinci",
        images: [DinoDevinci],
        links: {
            github: "https://github.com/drixares",
            website: "https://404devinci.fr",
        },
    },
    {
        slug: "pokedex",
        description: "",
        collaborators: [],
        title: "Pokedex",
        images: [Pokedex],
        links: {
            github: "https://github.com/drixares",
        },
    },
    {
        slug: "eligiusv",
        description: "",
        collaborators: [],
        title: "EligiusV (eSport)",
        images: [EligiusV],
        links: {
            github: "https://github.com/drixares",
            website: "https://eligiusv.fr",
        },
    },
];
