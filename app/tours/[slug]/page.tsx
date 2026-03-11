import Image from "next/image";
import { FaLocationDot, FaRegClock, FaCalendarDays } from "react-icons/fa6";
import { HiOutlineUserGroup } from "react-icons/hi";
import { AiOutlineDollar } from "react-icons/ai";
import Link from 'next/link';
import { HiArrowLongRight } from "react-icons/hi2";
import { TourDetails } from '@/components/tour-details';
import { tours, faqs } from "@/lib/data";
import type { Tour } from '@/lib/types'
import { SectionHeadline } from '@/components/section-headline';
import { FaqCard } from "@/components/faq-card";
import { notFound } from "next/navigation";
import { PopularTourCard } from "@/components/popular-tour-card";
import { ViewMore } from "@/components/view-more";

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
        <main className="min-h-screen flex flex-col items-center justify-start bg-white w-full pt-40 px-24">

            {/* title */}
            <div className="flex flex-col space-y-4 items-center justify-between w-full">
                <hr className="border border-black w-full " />
                <h1 className="text-4xl text-black font-bold">{safari.title}</h1>
                <hr className="border border-black w-full " />
            </div>



            {/* destination image */}
            <Image src={safari.images[0]} alt={safari.title} width={900} height={300} className="mt-30 w-11/12 border border-black" />


            {/* destination details */}
            <div className="flex flex-col w-11/12 h-60 bg-black my-20 items-center">

                <div className="flex items-center h-1/2 w-full">

                    {/* destination */}
                    <div className="flex flex-col items-start justify-center px-8 border-r border-white w-1/4 h-9/12">
                        <div className="flex items-center"><FaLocationDot className="mr-2 text-white" size={18} /> <p className="text-white text-lg font-normal">Destination:</p></div>
                        <p className="text-yellow-400 text-lg font-normal">{safari.destination}</p>
                    </div>


                    {/* duration */}
                    <div className="flex flex-col items-start justify-center px-8 border-r border-white w-1/4 h-9/12">
                        <div className="flex items-center"><FaRegClock className="mr-2 text-white" size={18} /> <p className="text-white text-lg font-normal">Duration:</p></div>
                        <p className="text-yellow-400 text-lg font-normal">{safari.duration}</p>
                    </div>


                    {/* dates */}
                    <div className="flex flex-col items-start justify-center px-8 border-r border-white w-1/4 h-9/12">
                        <div className="flex items-center"><FaCalendarDays className="mr-2 text-white" size={18} /> <p className="text-white text-lg font-normal">Dates:</p></div>
                        <p className="text-yellow-400 text-lg font-normal">{safari.dates}</p>
                    </div>



                    {/* group size */}
                    <div className="flex flex-col items-start justify-center px-8 border-r border-white w-1/4 h-9/12">
                        <div className="flex items-center"><HiOutlineUserGroup className="mr-2 text-white" size={18} /> <p className="text-white text-lg font-normal">Group size:</p></div>
                        <p className="text-yellow-400 text-lg font-normal">{safari.group_size}</p>
                    </div>



                </div>

                <hr className="border border-white w-10/12" />

                <div className="flex flex-col items-center justify-center w-full h-1/2 space-y-2">

                    {/* price */}
                    <div className="flex items-center"><AiOutlineDollar size={18} className="mr-2 text-white" /><p className="text-white text-lg font-normal">Price:</p> <span className="text-yellow-400 text-lg font-normal ml-2">{safari.price}</span></div>

                    {/* book tour and contact us buttons */}

                    <div className="flex items-center justify-center space-x-8 w-full">
                        <Link href={`/book/${safari.slug}`} className="flex justify-center items-center bg-yellow-400 text-black px-8 py-2 font-medium w-3/12">Book tour <HiArrowLongRight size={18} className="ml-4 text-black" /></Link>
                        <Link href={"/contact"} className=" flex justify-center border-2 border-white text-white px-8 py-2 font-medium w-3/12">Contact us</Link>
                    </div>

                </div>

            </div>


            {/* information area - with details, itinerary, gallery area tabs*/}

            <TourDetails safari={safari} />

            {/* faqs */}

            <section className="w-full min-h-screen flex flex-col items-center bg-white py-24">

                <SectionHeadline title="Frequently Asked Questions" color="black" />

                <div className="w-11/12 md:w-2/3 flex flex-col space-y-6">
                    {faqs.map((faq) => (
                        <FaqCard
                            key={faq.question}
                            question={faq.question}
                            answer={faq.answer}
                        />
                    ))}
                </div>

            </section>

            {/* view more tours section without the one currently being displayed */}

            <section className="w-full min-h-screen flex flex-col items-center bg-white py-24">

                <SectionHeadline title="View more tours" color="black" />

                {/* grid containing tour cards */}
                <div className="flex flex-col justify-center items-center mt-20">
                    <div className="grid grid-cols-2 gap-10">
                        {otherTours.map(({ dates,
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

                <ViewMore path="tours" color="black" />
            </section>

        </main>
    );
}