import { PopularDestinationCard } from "@/components/popular-destination-card";
import { SectionHeadline } from "@/components/section-headline";
import { ViewMore } from "@/components/view-more";
import { getDestinationData } from "@/lib/helpers";
import { destination_items } from "@/lib/data";
import Link from 'next/link'

export default function Destinations () {

    
    return (
        <main className="min-h-screen flex flex-col items-center bg-white dark:bg-black w-full">
            {/* POPULAR DESTINATIONS SECTION */}
            <section className="flex flex-col items-center justify-start min-h-screen w-full bg-white py-16">

                {/* popular destinations headline */}
                <SectionHeadline title={"Popular Destinations"} color={"black"} />

                {/* grid with popular destination cards */}
                <div className="flex flex-col justify-center items-center">
                    <div className="grid grid-cols-2 gap-8 w-full">
                        {destination_items.map(({label, href, image}) => <Link href={href}><PopularDestinationCard key={image} image={image} destination={label} tours={getDestinationData(label).length} /></Link>)}
                    </div>

                    {/* horizontal line & view all destinations button  */}
                    <ViewMore path={"destinations"} color={"white"} />
                </div>

            </section>
        </main>
    );
}