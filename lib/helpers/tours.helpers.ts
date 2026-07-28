import { Tour } from "../types/tour";

export async function getTours(): Promise<{
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
        const url = `${process.env.BACKEND_URL}/tours/`;
        const res = await fetch(url, {
            method: "GET"
        });

        const { data, error, success } = await res.json();

        if (!res.ok || !success) {
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

        const { success, error, data } = await res.json();

        if (!res.ok) {
            return {
                success: false,
                error: error || "Backend request data"
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

export async function getOtherTours(tourId: string): Promise<{
    success: boolean;
    data?: Tour[];
    error?: string;
}> {
    try {
        const url = `${process.env.BACKEND_URL}/${tourId}/other-tours`;
        const res = await fetch(url, {
            method: "GET"
        });

        const { success, error, data } = await res.json();

        if(!res.ok){
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