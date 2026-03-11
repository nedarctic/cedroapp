"use client";

import { useState, useTransition } from "react";
import { BookAction, BookState } from "@/actions/BookAction";
import { useRouter } from "next/navigation";

export function BookTourForm({ tourTitle }: { tourTitle: string }) {
    const router = useRouter();
    const [state, setState] = useState<BookState>({ success: false, error: undefined });
    const [isPending, startTransition] = useTransition();

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        startTransition(async () => {
            const result = await BookAction(tourTitle, formData);
            setState(result);
            if (result.success) {
                router.push("/");
            }
        });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full md:w-2/3 xl:w-1/2 border border-black p-10 space-y-8 bg-white"
        >
            <p className="text-black font-bold text-xl">Booking request for:</p>
            <p className="text-black font-medium text-lg">{tourTitle}</p>

            <div className="flex flex-col space-y-2">
                <label className="text-black font-medium">Full Name</label>
                <input
                    type="text"
                    name="name"
                    className="border border-black p-4 text-black outline-none"
                    required
                />
            </div>

            <div className="flex flex-col space-y-2">
                <label className="text-black font-medium">Email Address</label>
                <input
                    type="email"
                    name="email"
                    className="border border-black p-4 text-black outline-none"
                    required
                />
            </div>

            <button
                type="submit"
                className="border border-black px-10 py-4 font-bold text-white bg-black hover:bg-white hover:text-black transition"
            >
                {isPending ? "Submitting..." : "Submit Booking Request"}
            </button>

            {/* Feedback messages */}
            {state.error && <p className="text-red-600">{state.error}</p>}
            {state.success && <p className="text-green-600">Booking successful!</p>}
        </form>
    );
}