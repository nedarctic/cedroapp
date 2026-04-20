"use client"

import { SubscriptionAction } from "@/actions/subscription.actions";
import { useState, useActionState, useEffect } from "react";
import { StatusDialog } from "./status-dialog";

export function NewsletterSignup() {

    const [email, setEmail] = useState<string>('')

    const prevState = {
        error: undefined,
        success: false
    };

    const [state, formAction, pending] = useActionState(SubscriptionAction, prevState)

    const [open, setOpen] = useState<boolean>(false);

    useEffect(() => {
        setOpen(true)
    }, [state.success])
    
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
            {state.error?.includes("Unique constraint failed") && <StatusDialog message="Email already subscribed" error={true} open={open} onOpenChange={setOpen} />}
            {state.success && <StatusDialog message="Email successfully subscribed!" error={false} open={open} onOpenChange={setOpen} />}
        </div>
    );
}