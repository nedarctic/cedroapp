import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const bookings = pgTable("bookings", {
    id: serial("id").primaryKey(),
    tourTitle: text("tour_title").notNull(),
    name: text("name").notNull(),
    email: text("email").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
});