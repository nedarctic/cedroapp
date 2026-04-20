"use server";

import { prisma } from "@/lib/prisma";
import { z } from "zod";

type contactState = {
    error?: string;
    success?: boolean;
};

export async function ContactAction(contactState: contactState, formData: FormData): Promise<contactState> {
    
    const contactSchema = z.object({
        name:  z.string().min(1, "name is required"),
        email: z.email(),
        message: z.string()
    })

    const parsedData = contactSchema.safeParse({
        name: formData.get('name',),
        email: formData.get('email'),
        message: formData.get('message')
    })

    if (parsedData.error) return { error: parsedData.error.message }

    const { name, email, message } = parsedData.data;

    try {
        await prisma.contact.create({
            data: {
                name,
                email,
                message
            }
        })

        return { success: true }
        
    } catch (error) {
        return { error: error instanceof Error ? error.message : "Unknown error" }
    }
}