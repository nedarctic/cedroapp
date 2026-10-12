import Link from "next/link";
import { PiWhatsappLogoLight } from "react-icons/pi";
import { whatsappUrl } from "@/lib/data";

export function WhatsAppButton() {
  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      title="Chat with us on WhatsApp"
      className="fixed bottom-4 right-4 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105 hover:bg-[#1DA851] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25D366] sm:bottom-6 sm:right-6"
    >
      <PiWhatsappLogoLight aria-hidden="true" className="size-8" />
    </Link>
  );
}
