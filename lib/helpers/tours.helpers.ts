import { Tour } from "../types/tour";

export async function getTours(url: string): Promise<{
    success: boolean;
    error?: string;
    data?: {
        tours: Tour[];
        meta: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        }
    }
}> {
    try {
        const res = await fetch(url, {
            method: "GET"
        });

        const data = await res.json();

        if (!res.ok) {
            return {
                success: false,
                error: data || "Backend request error"
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

export async function getTour(tourId: string): Promise<{
    success: boolean;
    error?: any;
    data?: Tour;
}> {
    try {
        const url = `${process.env.BACKEND_URL}/tours/${tourId}`;
        const res = await fetch(url, {
            method: "GET"
        });

        const data = await res.json();

        if (!res.ok) {
            return {
                success: false,
                error: data || "Backend request data"
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

export async function getOtherTours(tourId: string): Promise<{
    success: boolean;
    data?: Tour[];
    error?: string;
}> {
    try {
        const url = `${process.env.BACKEND_URL}/tours/${tourId}/other-tours`;
        const res = await fetch(url, {
            method: "GET"
        });

        const data = await res.json();

        if(!res.ok){
            return {
                success: false,
                error: data || "Backend request error"
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

export async function getPopularTours (): Promise<{
    success: boolean;
    data?: Tour[];
    error?: string;
}> {
    try {
        const url = `${process.env.BACKEND_URL}/tours/popular-tours`;
        const res = await fetch(url, {
            method: "GET",
            cache: "no-store"
        });

        const data = await res.json();

        if(!res.ok){
            return {
                success: false,
                error: data || "Failed to fetch popular tours"
            }
        };

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

export async function getAllTours (): Promise<{success: boolean; data?: Tour[]; error?: string }> {
    try {
        const url = `${process.env.BACKEND_URL}/tours`;
        const res = await fetch(url, {
            method: "GET",
            cache: "no-store"
        });

        const data = await res.json();

        if(!res.ok){
            return {
                success: false,
                error: data || "Failed to fetch tours"
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