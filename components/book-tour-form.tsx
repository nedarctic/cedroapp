"use client";

import { useState, useTransition, useEffect, SubmitEvent } from "react";
import { BookAction, BookState } from "@/actions/booking.actions";
import { useRouter } from "next/navigation";
import { StatusDialog } from "./status-dialog";
import { toast } from "sonner";
import z from "zod";

const bookingSchema = z.object({
    name: z.string().trim().min(1, "Name is required"),
    email: z.email("Invalid email")
});

export function BookTourForm({ tourTitle, tourId }: { tourTitle: string; tourId: string }) {
    const router = useRouter();

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");

    const [errors, setErrors] = useState<any>({});
    const [loading, setLoading] = useState<boolean>(false);

    const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            setLoading(true);

            const validationResult = bookingSchema.safeParse({
                name,
                email
            });

            if (!validationResult.success) {
                setLoading(false);
                setErrors(z.treeifyError(validationResult.error));
                toast.error("Please correct the errors on the form.")
                return;
            }

            const url = "/api/bookings";
            const res = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    email,
                    tourId
                })
            });

            const { success } = await res.json();

            if (!res.ok || !success) {
                setLoading(false);
                toast.error("Failed to book tour");
                return;
            }

            setLoading(false);
            setErrors({});
            toast.success("Booking successfully created! Our team shall be in contact shortly.");
            router.push("/");

        } catch (error) {
            setLoading(false);
            toast.error("Failed to book")
        }
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
                    onChange={e => setName(e.target.value)}
                    placeholder="e.g. John Doe"
                    className="border border-black p-4 text-black outline-none"
                    required
                />
                {errors?.properties?.name?.errors?.length && <ul className="list-disc pl-4">
                    {errors.properties.name.errors.map((error: string, index: number) =>
                        <li key={index} className="text-xs text-red-600 font-bold">{error}</li>
                    )}
                </ul>}
            </div>

            <div className="flex flex-col space-y-2">
                <label className="text-black font-medium">Email Address</label>
                <input
                    type="email"
                    name="email"
                    onChange={e => setEmail(e.target.value)}
                    placeholder="e.g. email@email.com"
                    className="border border-black p-4 text-black outline-none"
                    required
                />
                {errors?.properties?.email?.errors?.length && <ul className="list-disc pl-4">
                    {errors.properties.email.errors.map((error: string, index: number) =>
                        <li key={index} className="text-xs text-red-600 font-bold">{error}</li>
                    )}
                </ul>}
            </div>

            <button
                type="submit"
                className="border border-black px-10 py-4 font-bold text-white bg-black hover:bg-white hover:text-black transition"
            >
                {loading ? "Submitting..." : "Submit Booking Request"}
            </button>
        </form>
    );
}