import { PROJECTS_WITH_INFOS } from "@/constants/projects";
import { ProjectCard } from "@/types/projects";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

// Helper function to get related projects for a given project
export const getRelatedProjects = (projectSlug: string): ProjectCard[] => {
    const project = PROJECTS_WITH_INFOS.find(project => project.slug === projectSlug);
    return project?.related || [];
};