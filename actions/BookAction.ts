"use server";

import { db } from "@/lib/db";
import { bookings } from "@/db/schema";
import z from "zod";
import { redirect } from "next/navigation";

export type BookState = {
  success?: boolean;
  error?: string;
};

// Server action
export async function BookAction(
  tourTitle: string,
  formData: FormData
): Promise<BookState> {

  
  const BookSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.email({ message: "Valid email is required" }),
    tourTitle: z.string(),
  });

  const parsedData = BookSchema.safeParse({
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    tourTitle,
  });

  if (!parsedData.success) {
    return { error: parsedData.error.issues[0].message };
  }

  try {
    await db.insert(bookings).values({
      name: parsedData.data.name,
      email: parsedData.data.email,
      tourTitle: parsedData.data.tourTitle,
    });

    return { success: true };
  } catch (error) {
    return { error: (error as Error).message };
  }
}