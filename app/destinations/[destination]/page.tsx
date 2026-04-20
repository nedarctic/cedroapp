import { getDestinationData } from "@/lib/helpers";
import { PopularTourCard } from "@/components/popular-tour-card";

export default async function DestinationDetails({ params }: { params: Promise<{ destination: string }> }) {

    const { destination } = await params;
    const { destinationGuide, destinationTours } = getDestinationData(destination);

    return (
        <main className="flex flex-col items-center justify-center min-h-screen w-full">
            <div className="flex flex-col space-y-4 items-center justify-between w-11/12 mt-10">
                <hr className="border border-black w-full " />
                <h1 className="text-4xl text-black font-bold">{destinationTours[0].destination.toUpperCase()}</h1>
                <h1 className="text-xl text-black font-bold">Tours & Description</h1>
                <hr className="border border-black w-full " />
            </div>

            <section className="flex flex-col items-center justify-center min-h-screen w-full">
                <div className="flex flex-col justify-center items-center mt-20">
                    <div className="grid grid-cols-2 gap-10">
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
                                link={link} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="flex flex-col items-center justify-center min-h-screen w-full py-24">

                <div className="flex flex-col gap-6 md:gap-8 w-10/12">

                    {destinationGuide.map(({ subtitle, content }) => (
                        <div key={subtitle} className="space-y-2 md:space-y-3">
                            <h2 className="text-black font-bold text-xl md:text-2xl">
                                {subtitle}
                            </h2>
                            <p className="text-black text-base md:text-lg">
                                {content}
                            </p>
                        </div>
                    ))}

                </div>

            </section>
        </main>
    );
}