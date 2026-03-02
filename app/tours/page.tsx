import { PopularTourCard } from "@/components/popular-tour-card";
import { SectionHeadline } from "@/components/section-headline";
import { Search } from "@/components/search";
import { Filters } from "@/components/filters";
import { maasai_mara_safari, kenya_wildlife_safari, kenya_luxury_safari } from "@/lib/data";

export default function Tours () {
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
                    <PopularTourCard title={maasai_mara_safari.title} destination={maasai_mara_safari.destination} duration={maasai_mara_safari.duration} dates={maasai_mara_safari.dates} price={maasai_mara_safari.price} image={maasai_mara_safari.images[0]} group_size={maasai_mara_safari.group_size} special_offer={true} link={maasai_mara_safari.link} />
                    <PopularTourCard title={kenya_wildlife_safari.title} destination={kenya_wildlife_safari.destination} duration={kenya_wildlife_safari.duration} dates={kenya_wildlife_safari.dates} price={kenya_wildlife_safari.price} image={kenya_wildlife_safari.images[0]} group_size={kenya_wildlife_safari.group_size} link={kenya_wildlife_safari.link} />
                    <PopularTourCard title={kenya_luxury_safari.title} destination={kenya_luxury_safari.destination} duration={kenya_luxury_safari.duration} dates={kenya_luxury_safari.dates} price={kenya_luxury_safari.price} image={kenya_luxury_safari.images[0]} group_size={kenya_luxury_safari.group_size} link={kenya_luxury_safari.link} />
                </div>
            </div>
        </main>
    );
}