"use client"

import { useState, SubmitEvent } from "react";
import { toast } from "sonner";
import z from "zod";

export function NewsletterSignup() {

    const [email, setEmail] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false);

    const submitHandler = async (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            setLoading(true);

            const validationResult = z.email("Invalid email").safeParse(email);
            if (!validationResult.success) {
                setLoading(false);
                toast.error("Subscription failed.", { description: "Invalid email" });
                return;
            }

            const url = "/api/subscriptions";
            const res = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({email})
            });

            const { success } = await res.json();
            if(!res.ok || !success){
                setLoading(false);
                toast.error("Subscription failed. Please try again later.")
                return;
            }

            setLoading(false);
            setEmail("");
            toast.success("Subscription successful");
            return;

        } catch (error) {
            toast.error("Service currently unavailable. Please try again later.");
            setLoading(false);
            return;
        }
    }

    return (
        <div className="flex flex-col justify-center items-center my-40">
            <p className="text-black text-md font-normal">Sign up to our newsletter for updates</p>
            <form onSubmit={submitHandler} className="flex flex-row items-center justify-center gap-4 mt-4">
                <input
                    type="email"
                    required
                    value={email}
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-60 px-4 py-2 border border-black placeholder:text-gray-500"
                    placeholder="email@gmail.com" />

                <button className="px-4 py-2 text-black bg-[#FAD039]">{loading ? "Signing up..." : "Sign up"}</button>
            </form>
        </div>
    );
}