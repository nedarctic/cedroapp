"use client"

import { SubmitEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import z from "zod";
import PhoneInput, { isValidPhoneNumber, type Value } from "react-phone-number-input";
import { Textarea } from "./ui/textarea";

const bookingRequestSchema = z.object({
    name: z.string().trim().min(1, "Name is required"),
    email: z.email("Invalid email"),
    phone: z.string()
        .min(1, "Phone number is required")
        .refine(value => isValidPhoneNumber(value), "Enter a valid phone number"),
    message: z.string().trim().min(1, "Please provide a message so that we may serve you better.")
});

type BookingFormErrors = Partial<Record<keyof z.infer<typeof bookingRequestSchema>, string[]>>;

export function CustomBookTourForm() {
    const router = useRouter();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState<Value>();
    const [message, setMessage] = useState("");

    const [loading, setLoading] = useState<boolean>(false);
    const [errors, setErrors] = useState<BookingFormErrors>({});

    const submitHandler = async (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        try {
            const validationResult = bookingRequestSchema.safeParse({
                name,
                email,
                phone: phone ?? "",
                message
            });

            if (!validationResult.success) {
                setLoading(false);
                setErrors(z.flattenError(validationResult.error).fieldErrors);
                toast.error("Please correct errors on the booking request form.");
                return;
            }

            setErrors({});
            const url = "/api/bookings";
            const res = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(validationResult.data)
            });

            const { success } = await res.json();

            if (!res.ok || !success) {
                setLoading(false);
                toast.error("Failed to submit booking request.");
                return;
            }

            setLoading(false);
            toast.success("Successfully sent the booking request. Our team shall be in contact shortly.");
            router.push("/");

        } catch {
            setLoading(false);
            toast.error("Service temporarily unavailable. Please try again later.")
        }
    }

    return <form
        onSubmit={submitHandler}
        className="w-full md:w-2/3 xl:w-1/2 border border-black p-10 space-y-8 bg-white"
    >
        <p className="text-black font-bold text-xl">Booking request</p>

        <div className="flex flex-col space-y-2">
            <label htmlFor="booking-name" className="text-black font-medium">Full Name</label>
            <input
                id="booking-name"
                type="text"
                name="name"
                onChange={e => setName(e.target.value)}
                placeholder="e.g. John Doe"
                className="border border-black p-4 text-black outline-none"
                required
                aria-invalid={Boolean(errors.name?.length)}
                aria-describedby={errors.name?.length ? "booking-name-error" : undefined}
            />
            {errors.name?.length && <ul id="booking-name-error" className="list-disc pl-4">
                {errors.name.map((error, index) =>
                    <li key={index} className="text-xs text-red-600 font-bold">{error}</li>
                )}
            </ul>}
        </div>

        <div className="flex flex-col space-y-2">
            <label htmlFor="booking-email" className="text-black font-medium">Email Address</label>
            <input
                id="booking-email"
                type="email"
                name="email"
                onChange={e => setEmail(e.target.value)}
                placeholder="e.g. email@email.com"
                className="border border-black p-4 text-black outline-none"
                required
                aria-invalid={Boolean(errors.email?.length)}
                aria-describedby={errors.email?.length ? "booking-email-error" : undefined}
            />
            {errors.email?.length && <ul id="booking-email-error" className="list-disc pl-4">
                {errors.email.map((error, index) =>
                    <li key={index} className="text-xs text-red-600 font-bold">{error}</li>
                )}
            </ul>}
        </div>

        <div className="flex flex-col space-y-2">
            <label htmlFor="booking-phone" className="text-black font-medium">Phone Number</label>
            <PhoneInput
                id="booking-phone"
                name="phone"
                defaultCountry="KE"
                value={phone}
                onChange={setPhone}
                autoComplete="tel"
                placeholder="Enter phone number"
                className="w-full border border-black px-4 focus-within:ring-2 focus-within:ring-[#615F36]"
                numberInputProps={{
                    className: "w-full bg-transparent p-4 text-black outline-none",
                    "aria-invalid": Boolean(errors.phone?.length),
                    "aria-describedby": errors.phone?.length ? "booking-phone-error" : undefined,
                    required: true
                }}
            />
            {errors.phone?.length && <ul id="booking-phone-error" className="list-disc pl-4">
                {errors.phone.map((error, index) =>
                    <li key={index} className="text-xs text-red-600 font-bold">{error}</li>
                )}
            </ul>}
        </div>

        <div className="flex flex-col space-y-2">
            <label htmlFor="booking-message" className="text-black font-medium">Message</label>
            <Textarea
                id="booking-message"
                name="message"
                onChange={e => setMessage(e.target.value)}
                placeholder="e.g. I'd like help booking a trip to the Maasai Mara..."
                className="border border-black p-4 text-black outline-none"
                required
                aria-invalid={Boolean(errors.message?.length)}
                aria-describedby={errors.message?.length ? "booking-message-error" : undefined}
            />
            {errors.message?.length && <ul id="booking-message-error" className="list-disc pl-4">
                {errors.message.map((error, index) =>
                    <li key={index} className="text-xs text-red-600 font-bold">{error}</li>
                )}
            </ul>}
        </div>

        <button
            type="submit"
            disabled={loading}
            className="w-full px-10 py-4 font-bold text-white bg-[#615F36]"
        >
            {loading ? "Submitting..." : "Submit Booking Request"}
        </button>
    </form>
}