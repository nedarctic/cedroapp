import { Section } from "./section";

export interface Blog {
    id: string;
    title: string;
    intro: string;
    conclusion: string;
    blogImageKey: string;
    blogImageUrl: string;
    sections?: Section[];
    createdAt: string;
    updatedAt: string;
}