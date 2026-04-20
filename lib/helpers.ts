import { travelStories, tours } from "./data";
import type { Blog } from "./types";

export async function getBlog(slug: string): Promise<Blog | null> {
    try {
        const blog = travelStories.filter((story) => story.slug === slug);

        return blog[0];
    } catch (error) {
        return null;
    }
}

export async function getOtherBlogs(slug: string): Promise<Blog[] | null> {
    try {
        const blogs = travelStories.filter((story) => story.slug !== slug);

        return blogs;

    } catch (error) {
        return null;
    }
}

export async function getBlogs(query: string) {
    if (!query) return travelStories; // return all blogs if no query

    const lowerQuery = query.toLowerCase();

    return travelStories.filter((story) => {
        const matchesTitle = story.title.toLowerCase().includes(lowerQuery);
        const matchesIntro = story.story.intro.toLowerCase().includes(lowerQuery);
        const matchesExcerpt = story.excerpt.toLowerCase().includes(lowerQuery);
        const matchesConclusion = story.story.conclusion.toLowerCase().includes(lowerQuery);

        const matchesSections = story.story.sections.some((section) =>
            section.subtitle.toLowerCase().includes(lowerQuery) ||
            section.content.toLowerCase().includes(lowerQuery)
        );

        return (
            matchesTitle ||
            matchesIntro ||
            matchesExcerpt ||
            matchesConclusion ||
            matchesSections
        );
    });
}

export async function getTours(query: string) {
    if (!query) return tours;

    const lowerQuery = query.toLowerCase();

    return tours.filter((tour) => {
        const matchTitle = tour.title.toLowerCase().includes(lowerQuery);
        const matchDestination = tour.destination.toLowerCase().includes(lowerQuery);

        return (matchTitle || matchDestination)
    });
}