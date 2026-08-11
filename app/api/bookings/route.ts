import { type NextRequest, NextResponse } from "next/server";

export async function POST (req: NextRequest) {
    try {
        const body = await req.json();
        const url = `${process.env.BACKEND_URL}/bookings`;
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        });

        const data = await res.json();

        if(!res.ok){
            return NextResponse.json({
                success: false,
                error: data || "Failed to create booking"
            })
        }

        return NextResponse.json({
            success: true,
            data
        });

    } catch (error) {
        return NextResponse.json({
            success: true,
            error: error instanceof Error ? error.message : String(error)
        })
    }
}