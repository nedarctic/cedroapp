import { Blog } from "../types/blog";
import { Destination } from "../types/destination";

export async function getDestinations(url: string): Promise<{
    success: boolean;
    data?: {
        destinations: Destination[];
        meta: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        }
    }
    error?: string;
}> {
    try {

        const res = await fetch(url, {
            method: "GET"
        });

        const { data, error, success } = await res.json();

        if (!res.ok) {
            return {
                success: false,
                error: error || "Backend request error"
            }
        }

        return {
            success,
            data
        }
    } catch (error) {
        return {
            success: false,
            error: error instanceof Error ? error.message : String(error)
        }
    }
}

export async function getDestination(destinationId: string): Promise<{
    success: boolean;
    data?: Destination;
    error?: string;
}> {
    try {
        const url = `${process.env.BACKEND_URL}/destinations/${destinationId}`;
        const res = await fetch(url, {
            method: "GET",
        });

        const { data, success, error } = await res.json();

        if (!res.ok) {
            return {
                success: false,
                error: error || "Backend request error"
            }
        }

        return {
            success,
            data
        }

    } catch (error) {
        return {
            success: false,
            error: error instanceof Error ? error.message : String(error)
        }
    }
}

export async function getAllDestinations(): Promise<{
    success: boolean;
    data?: Destination[];
    error?: string;
}> {
    try {
        const url = `${process.env.BACKEND_URL}/destinations/all`;
        const res = await fetch(url, {
            method: "GET",
        });

        const data = await res.json();

        if (!res.ok) {
            return {
                success: false,
                error: data || "Failed to fetch destinations"
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
export async function getThreeLatestBlogs(): Promise<{
    success: boolean;
    data?: Blog[];
    error?: string;
}> {
    try {
        const url = `${process.env.BACKEND_URL}/destinations/three`;
        const res = await fetch(url, {
            method: "GET"
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