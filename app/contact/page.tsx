import { FaqsAccordion } from "@/components/faqs-accordion";
import { SectionHeadline } from "@/components/section-headline";
import { ContactSection } from "@/components/contact-section";
import { ContactMap } from "@/components/contact-map"

export default function Contact() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-white">

            <section className="w-full min-h-screen flex flex-col items-center bg-white py-24">

                <SectionHeadline title="Contact" color="black" />

                <div className="w-10/12">
                    <ContactSection />
                </div>

                <div className="w-10/12">
                    <ContactMap />
                </div>

            </section>

            <section className="w-full min-h-screen flex flex-col items-center bg-white py-24">

                <SectionHeadline title="Frequently Asked Questions" color="black" />

                <FaqsAccordion />

            </section>
        </main>
    );
}