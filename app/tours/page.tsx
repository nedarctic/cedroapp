import { Filters } from "@/components/filters";
import { PopularTourCard } from "@/components/popular-tour-card";
import { Search } from "@/components/search";
import { SectionHeadline } from "@/components/section-headline";
import { getTours } from "@/lib/helpers/tours.helpers";

export default async function Tours({ searchParams }: { searchParams: Promise<{ query: string; filter: string }> }) {

    const { query } = await searchParams;

    const { data } = await getTours();
    const { meta, tours } = data!;

    return (
        <main className="flex flex-col justify-center items-center py-8 sm:py-12 md:py-16 lg:py-24 bg-white">

            {/* page title headline */}
            <SectionHeadline title={"All tours"} color={"black"} />

            {/* search component */}
            <div className="w-full lg:w-1/3 max-w-2xl mx-auto px-4 sm:px-0">
                <Search placeholder={"Search tours..."} />
            </div>

            {/* filters - responsive padding and width */}
            <div className="w-full px-4 sm:px-6 md:px-8 lg:px-20 mt-8 sm:mt-12 md:mt-16 lg:mt-20 self-start">
                <Filters filters={["Kenya", "Tanzania", "Rwanda", "Zanzibar"]} />
            </div>

            {/* grid containing tour cards */}
            <div className="w-full px-4 lg:w-11/12 flex flex-col justify-center items-center mt-12 sm:mt-16 md:mt-20">
                {tours.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10 w-full px-4 sm:px-0">
                        {tours.map(({ dates,
                            groupSize,
                            destination,
                            duration,
                            tourImageUrl,
                            price,
                            title,
                            id,

                        }) => {

                            const formattedPrice = Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(Number(price))

                            return <PopularTourCard
                                key={title}
                                dates={dates}
                                group_size={groupSize}
                                destination={destination?.name!}
                                duration={duration}
                                image={tourImageUrl}
                                price={formattedPrice}
                                title={title}
                                link={`/tours/${id}`}
                            />
                        })}
                    </div>
                ) : (
                    <p className="font-bold text-black text-md sm:text-lg text-center px-4">
                        No tours match your query.
                    </p>
                )}
            </div>

        </main>
    );
}