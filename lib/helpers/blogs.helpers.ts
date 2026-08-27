import { constants } from "buffer";
import { Blog } from "../types/blog";

export async function getThreeLatestBlogs(): Promise<{
    success: boolean;
    data?: Blog[];
    error?: string;
}> {
    try {
        const url = `${process.env.BACKEND_URL}/blogs/three`;
        const res = await fetch(url, {
            method: "GET",
            cache: "no-store"
        });

        const data = await res.json()

        if (!res.ok) {
            return {
                success: false,
                error: data || "Failed to fetch latest blogs"
            }
        }

        return {
            success: true,
            data
        }

    } catch (error) {
        return {
            success: false,
            error: error instanceof Error ? error.message : String(error)
        }
    }
}

export async function getBlogs(url: string): Promise<{
    success: boolean;
    data?: {
        blogs: Blog[];
        meta: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    };
    error?: string;
}> {
    try {
        const res = await fetch(url, {
            method: "GET"
        });

        const data = await res.json();

        if (!res.ok) {
            return {
                success: false,
                error: data || "Failed to fetch blogs"
            }
        }

        return {
            success: true,
            data
        }

    } catch (error) {
        return {
            success: false,
            error: error instanceof Error ? error.message : String(error)
        }
    }
}

export async function getOtherBlogs(blogId: string): Promise<{ success: boolean; data?: Blog[]; error?: string; }> {
    try {
        const url = `${process.env.BACKEND_URL}/blogs/${blogId}/other-blogs`;
        const res = await fetch(url, {
            method: "GET"
        });

        const data = await res.json();

        if (!res.ok) {
            return {
                success: false,
                error: data || "Failed to fetch other blogs"
            }
        }

        return {
            success: true,
            data
        }

    } catch (error) {
        return {
            success: false,
            error: error instanceof Error ? error.message : String(error)
        }
    }
}

export async function getBlog(blogId: string): Promise<{success: boolean; data?: Blog; error?: string}> {
    try {
        const url = `${process.env.BACKEND_URL}/blogs/${blogId}`;
        const res = await fetch(url, {
            method: "GET"
        });

        const data = await res.json();
        if(!res.ok){
            return {
                success: false,
                error: data || "Failed to fetch blog details"
            }
        }

        return {
            success: true,
            data
        }

    } catch (error) {
        return {
            success: false,
            error: error instanceof Error ? error.message : String(error)
        }
    }
}