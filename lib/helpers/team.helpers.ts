import { TeamMember } from "../types/team-member";

export async function getMembers(): Promise<{
    success: boolean;
    data?: {
        members: TeamMember[],
        meta: {
            page: number;
            total: number;
            limit: number;
            totalPages: number
        }
    };
    error?: string;
}> {
    try {
        const url = `${process.env.BACKEND_URL}/team`;
        const res = await fetch(url, {
            method: "GET"
        });

        const data = await res.json();

        if (!res.ok) {
            return {
                success: false,
                error: data || "Failed to fetch team data"
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