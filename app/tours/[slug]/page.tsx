import { FaqsAccordion } from "@/components/faqs-accordion";
import { PopularTourCard } from "@/components/popular-tour-card";
import { SectionHeadline } from '@/components/section-headline';
import TimelineComponent from "@/components/timeline-component";
import { TourDetails } from '@/components/tour-details';
import { ViewMore } from "@/components/view-more";
import { tours } from "@/lib/data";
import type { Tour } from '@/lib/types';
import Image from "next/image";
import Link from 'next/link';
import { notFound } from "next/navigation";
import { AiOutlineDollar } from "react-icons/ai";
import { FaCalendarDays, FaLocationDot, FaRegClock } from "react-icons/fa6";
import { HiOutlineUserGroup } from "react-icons/hi";
import { HiArrowLongRight } from "react-icons/hi2";

export async function getTour(slug: string): Promise<Tour | null> {
    try {
        const tour = tours.filter(tour => tour.slug === slug);
        return tour[0];
    } catch (error) {
        return null;
    }
}

export async function getOtherTours(slug: string): Promise<Tour[] | null> {
    try {
        const otherTours = tours.filter(tour => tour.slug !== slug);
        return otherTours;
    } catch (error) {
        return null;
    }
}

export default async function Itinerary({ params }: { params: Promise<{ slug: string }> }) {

    const { slug } = await params;

    const safari = await getTour(slug);
    const otherTours = await getOtherTours(slug);

    if (!safari || !otherTours || otherTours.length < 1) notFound();

    return (
        <main className="min-h-screen flex flex-col items-center justify-start bg-white w-full pt-20 sm:pt-24 md:pt-32 lg:pt-40 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">

            {/* title */}
            <div className="flex flex-col space-y-3 sm:space-y-4 items-center justify-between w-full max-w-7xl">
                <hr className="border border-black w-full" />
                <h1 className="text-2xl sm:text-3xl md:text-4xl text-black font-bold text-center px-4">{safari.title}</h1>
                <h1 className="text-xl sm:text-2xl text-black font-bold">Details & Itinerary</h1>
                <hr className="border border-black w-full" />
            </div>

            {/* destination image */}
            <div className="w-full max-w-7xl mt-8 sm:mt-12 md:mt-16 lg:mt-20">
                <Image
                    src={safari.images[0]}
                    alt={safari.title}
                    width={900}
                    height={300}
                    className="w-full border border-black object-cover h-auto"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                />
            </div>

            {/* destination details - Responsive card */}
            <div className="w-full max-w-7xl bg-black my-8 sm:my-12 md:my-16 lg:my-20">

                {/* Top section - Grid layout for responsive */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    {/* destination */}
                    <div className="flex flex-col items-start justify-center p-4 sm:p-6 border-b sm:border-b-0 sm:border-r border-white/30">
                        <div className="flex items-center mb-1">
                            <FaLocationDot className="mr-2 text-white" size={18} />
                            <p className="text-white text-sm sm:text-base font-normal">Destination:</p>
                        </div>
                        <p className="text-yellow-400 text-base sm:text-lg font-normal">{safari.destination}</p>
                    </div>

                    {/* duration */}
                    <div className="flex flex-col items-start justify-center p-4 sm:p-6 border-b sm:border-b-0 sm:border-r border-white/30">
                        <div className="flex items-center mb-1">
                            <FaRegClock className="mr-2 text-white" size={18} />
                            <p className="text-white text-sm sm:text-base font-normal">Duration:</p>
                        </div>
                        <p className="text-yellow-400 text-base sm:text-lg font-normal">{safari.duration}</p>
                    </div>

                    {/* dates */}
                    <div className="flex flex-col items-start justify-center p-4 sm:p-6 border-b sm:border-b-0 lg:border-r border-white/30">
                        <div className="flex items-center mb-1">
                            <FaCalendarDays className="mr-2 text-white" size={18} />
                            <p className="text-white text-sm sm:text-base font-normal">Dates:</p>
                        </div>
                        <p className="text-yellow-400 text-base sm:text-lg font-normal">{safari.dates}</p>
                    </div>

                    {/* group size */}
                    <div className="flex flex-col items-start justify-center p-4 sm:p-6">
                        <div className="flex items-center mb-1">
                            <HiOutlineUserGroup className="mr-2 text-white" size={18} />
                            <p className="text-white text-sm sm:text-base font-normal">Group size:</p>
                        </div>
                        <p className="text-yellow-400 text-base sm:text-lg font-normal">{safari.group_size}</p>
                    </div>
                </div>

                <hr className="border border-white/30 w-11/12 mx-auto" />

                {/* Bottom section */}
                <div className="flex flex-col items-center justify-center p-6 sm:p-8 space-y-4 sm:space-y-6">
                    {/* price */}
                    <div className="flex items-center flex-wrap justify-center">
                        <AiOutlineDollar size={20} className="mr-2 text-white" />
                        <p className="text-white text-base sm:text-lg font-normal">Price:</p>
                        <span className="text-yellow-400 text-base sm:text-lg font-normal ml-2">{safari.price}</span>
                    </div>

                    {/* book tour and contact us buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 w-full px-4 sm:px-0">
                        <Link
                            href={`/book/${safari.slug}`}
                            className="flex justify-center items-center bg-yellow-400 text-black px-6 sm:px-8 py-2.5 font-medium w-full sm:w-auto min-w-[200px] transition hover:bg-yellow-500"
                        >
                            Book tour <HiArrowLongRight size={18} className="ml-2 sm:ml-4 text-black" />
                        </Link>
                        <Link
                            href={"/contact"}
                            className="flex justify-center border-2 border-white text-white px-6 sm:px-8 py-2.5 font-medium w-full sm:w-auto min-w-[200px] transition hover:bg-white/10"
                        >
                            Contact us
                        </Link>
                    </div>
                </div>
            </div>

            {/* information area - with details, itinerary, gallery area tabs*/}
            <div className="flex flex-col items-center w-full max-w-7xl">
                <TourDetails safari={safari} />
            </div>

            {/* Itinerary Section */}
            <section className="w-full flex flex-col items-center bg-white pt-8 sm:pt-12 md:pt-16 pb-12 sm:pb-16 md:pb-24">
                <div className="flex flex-col items-start w-full mb-4 sm:mb-6">
                    <h1 className="text-black text-xl sm:text-2xl font-bold my-3 self-start">Itinerary</h1>
                </div>
                <TimelineComponent itinerary={safari.itinerary} />
            </section>

            {/* FAQs */}
            <section className="w-full max-w-7xl flex flex-col items-center bg-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6">
                <SectionHeadline title="Frequently Asked Questions" color="black" />
                <div className="flex flex-col items-center w-full mt-6 sm:mt-8">
                    <FaqsAccordion />
                </div>
            </section>

            {/* View more tours section */}
            <section className="w-full max-w-7xl flex flex-col items-center bg-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6">
                <SectionHeadline title="View more tours" color="black" />

                {/* grid containing tour cards */}
                <div className="flex flex-col justify-center items-center w-full mt-8 sm:mt-12 md:mt-16 lg:mt-20">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10 w-full">
                        {otherTours.slice(0, 8).map(({ dates,
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
                </div>

                <div className="w-full mt-8 sm:mt-12">
                    <ViewMore path="tours" color="black" />
                </div>
            </section>
        </main>
    );
}