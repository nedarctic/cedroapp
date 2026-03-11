import { notFound } from "next/navigation";
import Image from "next/image";
import { getTour } from "@/app/tours/[slug]/page";
import { SectionHeadline } from "@/components/section-headline";
import { BookTourForm } from "@/components/book-tour-form";

export default async function BookTour({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const tour = await getTour(slug);

    if (!tour) return notFound();

    return (
        <main className="min-h-screen w-full flex flex-col items-center bg-white">

            {/* hero section */}
            <section className="w-full min-h-screen flex flex-col items-center justify-center py-24">

                <SectionHeadline title={tour.title} color="black" />

                <div className="flex flex-col w-11/12 border border-black">

                    {/* hero image */}
                    <div className="relative w-full aspect-video border-b-2 border-black">
                        <Image
                            src={tour.heroImage}
                            alt={tour.title}
                            fill
                            priority
                            className="object-cover"
                        />
                    </div>

                    {/* summary */}
                    <div className="flex flex-col p-10 space-y-6">

                        <p className="text-black text-lg font-normal">
                            {tour.intro}
                        </p>

                        <div className="flex flex-wrap gap-6 text-black font-medium">
                            <span>{tour.duration}</span>
                            <span>{tour.group_size}</span>
                            <span>{tour.dates}</span>
                        </div>

                        <p className="text-black font-bold text-xl">
                            {tour.price}
                        </p>

                    </div>

                </div>
            </section>

            {/* booking form section */}
            <section className="w-full flex flex-col items-center pb-32">

                <SectionHeadline title="Book This Tour" color="black" />

                <div className="w-11/12 flex justify-center">
                    <BookTourForm tourTitle={tour.title} />
                </div>

            </section>

        </main>
    );
}
