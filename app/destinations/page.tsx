import { PopularDestinationCard } from "@/components/popular-destination-card";
import { SectionHeadline } from "@/components/section-headline";
import { ViewMore } from "@/components/view-more";
import { getDestinationData } from "@/lib/helpers";
import { destination_items } from "@/lib/data";
import Link from 'next/link'

export default function Destinations () {

    return (
        <main className="min-h-screen flex flex-col items-center bg-white w-full">
            {/* POPULAR DESTINATIONS SECTION */}
            <section className="flex flex-col items-center justify-start min-h-screen w-full bg-white py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8">

                {/* popular destinations headline */}
                <SectionHeadline title={"Popular Destinations"} color={"black"} />

                {/* grid with popular destination cards */}
                <div className="flex flex-col justify-center items-center w-full max-w-7xl mx-auto mt-6 sm:mt-8 md:mt-10 lg:mt-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8 w-full">
                        {destination_items.map(({label, href, image}) => (
                            <Link key={image} href={href} className="block transition-transform hover:scale-[1.02] duration-300">
                                <PopularDestinationCard 
                                    image={image} 
                                    destination={label} 
                                    tours={getDestinationData(label).length} 
                                />
                            </Link>
                        ))}
                    </div>

                    {/* horizontal line & view all destinations button */}
                    <div className="w-full mt-8 sm:mt-10 md:mt-12 lg:mt-16">
                        <ViewMore path={"destinations"} color={"white"} />
                    </div>
                </div>

            </section>
        </main>
    );
}