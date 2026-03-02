import { travelStories } from "./data";
import type { Blog } from "./types";

export async function getBlog (slug: string): Promise<Blog | null> {
    try {
        const blog = travelStories.filter((story) => story.slug === slug);

        return blog[0];
    } catch (error) {
        return null;
    }
}

export async function getOtherBlogs (slug: string): Promise<Blog[] | null> {
    try {
        const blogs = travelStories.filter((story) => story.slug !== slug);
        
        return blogs; 

    } catch (error) {
        return null;
    }
}