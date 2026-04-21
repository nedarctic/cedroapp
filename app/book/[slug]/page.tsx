// app/book/[slug]/page.tsx
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
        <main className="min-h-screen w-full flex flex-col items-center bg-white overflow-x-hidden">
            
            {/* hero section */}
            <section className="w-full flex flex-col items-center justify-start py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8">
                
                <SectionHeadline title={tour.title} color="black" />

                <div className="w-full max-w-4xl mt-6 sm:mt-8 md:mt-10 border border-black">
                    
                    {/* hero image */}
                    <div className="relative w-full aspect-video border-b-2 border-black">
                        <Image
                            src={tour.heroImage}
                            alt={tour.title}
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                        />
                    </div>

                    {/* summary */}
                    <div className="flex flex-col p-4 sm:p-6 md:p-8 lg:p-10 space-y-4 sm:space-y-5 md:space-y-6">
                        
                        <p className="text-black text-sm sm:text-base md:text-lg font-normal leading-relaxed">
                            {tour.intro}
                        </p>

                        <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 text-black font-medium text-sm sm:text-base">
                            <span className="inline-flex items-center gap-1">
                                <svg className="w-4 h-4 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                {tour.duration}
                            </span>
                            <span className="inline-flex items-center gap-1">
                                <svg className="w-4 h-4 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                                {tour.group_size}
                            </span>
                            <span className="inline-flex items-center gap-1">
                                <svg className="w-4 h-4 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                {tour.dates}
                            </span>
                        </div>

                        <div className="pt-2">
                            <p className="text-black font-bold text-xl sm:text-2xl md:text-3xl">
                                {tour.price}
                            </p>
                            <p className="text-gray-500 text-xs sm:text-sm">per person</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* booking form section */}
            <section className="w-full flex flex-col items-center pb-16 sm:pb-20 md:pb-24 lg:pb-32 px-4 sm:px-6 md:px-8">
                
                <SectionHeadline title="Book This Tour" color="black" />

                <div className="flex flex-col items-center w-full max-w-2xl mt-6 sm:mt-8 md:mt-10">
                    <BookTourForm tourTitle={tour.title} />
                </div>
            </section>
        </main>
    );
}