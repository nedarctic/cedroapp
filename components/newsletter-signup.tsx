"use client"

import { SubscriptionAction } from "@/actions/subscription.actions";
import { useState, useActionState } from "react";

export function NewsletterSignup() {

    const [email, setEmail] = useState<string>('')

    const prevState = {
        error: undefined,
        success: false
    };

    const [state, formAction, pending] = useActionState(SubscriptionAction, prevState)
    
    return (
        <div className="flex flex-col justify-center items-center my-40">
            <p className="text-black text-md font-normal">Sign up to our newsletter for updates</p>
            <form action={formAction} className="flex flex-row items-center justify-center gap-4 mt-4">
                <input 
                type="email" 
                required 
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                className="w-60 px-4 py-2 border border-black placeholder:text-gray-500" 
                placeholder="email@gmail.com" />

                <button className="px-4 py-2 text-black bg-[#FAD039]">{pending ? "Signing up..." : "Sign up"}</button>
            </form>
            {state.error?.includes("Unique constraint failed") && <p className="text-red-600 text-sm font-normal mt-4">Email already subscribed</p>}
            {state.success && <p className="text-green-600 text-sm font-normal mt-4">Email successfully subscribed!</p>}
        </div>
    );
}