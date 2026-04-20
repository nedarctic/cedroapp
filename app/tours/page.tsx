import { Filters } from "@/components/filters";
import { PopularTourCard } from "@/components/popular-tour-card";
import { SearchTours } from "@/components/search-tours";
import { SectionHeadline } from "@/components/section-headline";
import { getTours } from "@/lib/helpers";

export default async function Tours({ searchParams }: { searchParams: Promise<{ query: string; filter: string }> }) {

    const { query } = await searchParams;
    const tours = await getTours(query);

    return (
        <main className="flex flex-col justify-center items-center py-24 bg-white">

            {/* page title headline */}
            <SectionHeadline title={"All tours"} color={"black"} />

            {/* search component */}
            {/* <Search placeholder={"Search tours"} /> */}
            <SearchTours />

            {/* filters */}
            <div className="px-20 mt-20 self-start">
                <Filters filters={["Kenya", "Tanzania", "Rwanda", "Zanzibar"]} />
            </div>

            {/* grid containing tour cards */}
            <div className="flex flex-col justify-center items-center mt-20">
                {tours.length > 0 ? <div className="grid grid-cols-2 gap-10">
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
                    : <p className="font-bold text-black text-md">No tours match your query.</p>}
            </div>
        </main>
    );
}