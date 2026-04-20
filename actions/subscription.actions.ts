"use server"

import { prisma } from "@/lib/prisma";
import { z } from 'zod';

interface subscriptionStatus {
    error?: string,
    success?: boolean
}

export async function SubscriptionAction(subscriptionStatus: subscriptionStatus, formData: FormData) {
    const subscriptionSchema = z.object({
        email: z.email()
    })

    const parsedData = subscriptionSchema.safeParse({
        email: formData.get("email")
    })

    if (parsedData.error) return { error: parsedData.error.message }

    const { email } = parsedData.data;

    try {
        await prisma.subscription.create({
            data: {
                email
            }
        })

        return { success: true }
    } catch (error) {
        return { error: error instanceof Error ? error.message : "Unknown error" }
    }
}