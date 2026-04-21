// app/destinations/[destination]/page.tsx
import { getDestinationData } from "@/lib/helpers";
import { PopularTourCard } from "@/components/popular-tour-card";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function DestinationDetails({ params }: { params: Promise<{ destination: string }> }) {

    const { destination } = await params;
    const { destinationGuide, destinationTours } = getDestinationData(destination);

    // Handle case where destination doesn't exist
    if (!destinationTours || destinationTours.length === 0) {
        notFound();
    }

    return (
        <main className="flex flex-col items-center justify-start min-h-screen w-full pt-8 sm:pt-12 md:pt-16 lg:pt-20 px-4 sm:px-6 md:px-8">
            
            {/* Header Section */}
            <div className="flex flex-col space-y-2 sm:space-y-3 md:space-y-4 items-center justify-between w-full max-w-7xl">
                <hr className="border border-black w-full" />
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black font-bold text-center px-4 break-words">
                    {destinationTours[0].destination.toUpperCase()}
                </h1>
                <h1 className="text-lg sm:text-xl md:text-2xl text-black font-bold text-center">
                    Tours & Description
                </h1>
                <hr className="border border-black w-full" />
            </div>

            {/* Tours Section */}
            <section className="flex flex-col items-center justify-center w-full py-8 sm:py-12 md:py-16 lg:py-20">
                <div className="flex flex-col justify-center items-center w-full max-w-7xl">
                    {destinationTours.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8 w-full">
                            {destinationTours.map(({ dates,
                                group_size,
                                destination,
                                duration,
                                images,
                                price,
                                title,
                                link
                            }) => (
                                <PopularTourCard
                                    key={title}
                                    dates={dates}
                                    group_size={group_size}
                                    destination={destination}
                                    duration={duration}
                                    image={images[0]}
                                    price={price}
                                    title={title}
                                    link={link} 
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12">
                            <p className="text-black text-base sm:text-lg md:text-xl">No tours available for this destination.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Destination Guide Section */}
            <section className="flex flex-col items-center justify-center w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
                <div className="flex flex-col gap-6 sm:gap-7 md:gap-8 lg:gap-10 w-full max-w-4xl px-4 sm:px-6 md:px-8">
                    
                    {/* Section Title */}
                    <div className="text-center mb-2 sm:mb-4">
                        <h2 className="underline underline-offset-8 text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-2">
                            Destination Guide
                        </h2>
                    </div>

                    {/* Guide Content */}
                    {destinationGuide.map(({ subtitle, content }, index) => (
                        <div 
                            key={subtitle} 
                            className="space-y-2 sm:space-y-3 md:space-y-4"
                        >
                            <h2 className="text-black font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">
                                {subtitle}
                            </h2>
                            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                                {content}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Optional: Call to Action Section */}
            <section className="w-full py-12 sm:py-16 md:py-20">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-3 sm:mb-4">
                        Ready to Explore {destinationTours[0].destination}?
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-4 sm:mb-6">
                        Book your dream safari today and create unforgettable memories
                    </p>
                    <Link href={"/tours"} className="bg-yellow-400 text-black px-6 sm:px-8 py-2.5 sm:py-3 font-semibold hover:bg-yellow-500 transition-colors text-sm sm:text-base">
                        View All Tours
                    </Link>
                </div>
            </section>
        </main>
    );
}