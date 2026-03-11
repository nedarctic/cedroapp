CREATE TABLE "bookings" (
	"id" serial PRIMARY KEY NOT NULL,
	"tour_title" text NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
