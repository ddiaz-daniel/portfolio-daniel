import React from "react";

export interface ProjectsResponse {
    projects: Project[] | null;
    error?: string;
}

export interface Project {
    id: number;
    name: string;
    description: string;
    created_on: Date;
    stack: string[];
    preview: string;
    github: string | null;
    website: "string";
    collaborators: Collaborator[] | null;
    tasks: Task[] | null;
    tags: string[];
}

export interface Technology {
    id: number;
    name: "python" | "js" | "ts" | "html5" | "css" | "react" | "next" | "php" | "scss" | "opencv" | "react native";
    icon: string;
}

export interface Collaborator {
    id: number;
    name: string;
    github: string;
}

export interface Task {
    id: number;
    name: string;
    description: string;
}

export interface MilestonesResponse {
    milestones: Milestone[] | null;
    error?: string;
}

export interface Milestone {
    id: number;
    name: string;
    description: string;
    date: Date;
    image: string;
    side: "left" | "right";
}
