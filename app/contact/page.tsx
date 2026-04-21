import { FaqsAccordion } from "@/components/faqs-accordion";
import { SectionHeadline } from "@/components/section-headline";
import { ContactSection } from "@/components/contact-section";
import { ContactMap } from "@/components/contact-map"
import { NewsletterSignup } from "@/components/newsletter-signup";

export default function Contact() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-start bg-white w-full overflow-x-hidden">
            
            {/* Contact Section */}
            <section className="w-full flex flex-col items-center bg-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8">
                
                <SectionHeadline title="Contact" color="black" />

                <div className="w-full max-w-7xl mt-6 sm:mt-8 md:mt-10">
                    <ContactSection />
                </div>

                <div className="w-full max-w-7xl mt-8 sm:mt-10 md:mt-12">
                    <ContactMap />
                </div>

            </section>

            {/* FAQ Section */}
            <section className="w-full flex flex-col items-center bg-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8">
                
                <SectionHeadline title="Frequently Asked Questions" color="black" />

                <div className="flex flex-col items-center w-full max-w-4xl mt-6 sm:mt-8 md:mt-10">
                    <FaqsAccordion />
                </div>

                <div className="w-full mt-12 sm:mt-16 md:mt-20">
                    <NewsletterSignup />
                </div>
            </section>
        </main>
    );
}