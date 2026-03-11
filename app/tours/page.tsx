import { PopularTourCard } from "@/components/popular-tour-card";
import { SectionHeadline } from "@/components/section-headline";
import { Search } from "@/components/search";
import { Filters } from "@/components/filters";
import { tours } from "@/lib/data";

export default function Tours() {
    return (
        <main className="flex flex-col justify-center items-center py-24 bg-white/30">

            {/* page title headline */}
            <SectionHeadline title={"All tours"} color={"black"} />

            {/* search component */}
            <Search placeholder={"Search tours"} />

            {/* filters */}
            <div className="px-20 mt-20 self-start">
                <Filters filters={["Kenya", "Tanzania", "Rwanda", "Zanzibar"]} />
            </div>

            {/* grid containing tour cards */}
            <div className="flex flex-col justify-center items-center mt-20">
                <div className="grid grid-cols-2 gap-10">
                    {tours.map(({ dates,
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
                            link={link} />
                    ))}
                </div>
            </div>
        </main>
    );
}