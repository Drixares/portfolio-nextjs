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
        year: 2024,
        stack: {},
        title: "Advent Calendly",
        description: "",
        collaborators: ["La404devinci"],
        images: [AdventCalendly],
        links: {
            github: "https://github.com/drixares",
            website: "",
        },
    },
    {
        slug: "learn404",
        year: 2024,
        stack: {},
        title: "Learn404",
        description:
            "A course platform that I developed with a friend during the summer of 2024.",
        collaborators: ["Nicolas"],
        images: [Learn404],
        links: {
            github: "https://github.com/drixares",
        },
    },
    {
        slug: "404devinci",
        year: 2024,
        stack: {},
        title: "La 404 Devinci",
        description: "",
        collaborators: ["Nicolas", "Michel"],
        images: [DinoDevinci],
        links: {
            github: "https://github.com/drixares",
            website: "https://404devinci.fr",
        },
    },
    {
        slug: "pokedex",
        year: 2024,
        stack: {},
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
        year: 2024,
        stack: {},
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
