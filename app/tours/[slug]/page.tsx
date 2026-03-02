import Image from "next/image";
import { FaLocationDot, FaRegClock, FaCalendarDays } from "react-icons/fa6";
import { HiOutlineUserGroup } from "react-icons/hi";
import { AiOutlineDollar } from "react-icons/ai";
import Link from 'next/link';
import { HiArrowLongRight } from "react-icons/hi2";
import { TourDetails } from '@/components/tour-details';
import { maasai_mara_safari, kenya_wildlife_safari, kenya_luxury_safari } from "@/lib/data";

export default async function Itinerary({ params }: { params: Promise<{ slug: string }> }) {

    const { slug } = await params;

    let safari;

    console.log(slug);

    if(slug.toString() === maasai_mara_safari.slug) {
        safari = maasai_mara_safari;
        console.log(safari)
    }
    else if(slug.toString() === kenya_wildlife_safari.slug) {
        safari = kenya_wildlife_safari;
        console.log(safari)
    }
    else if(slug.toString() === kenya_luxury_safari.slug) {
        safari = kenya_luxury_safari;
        console.log(safari)
    }
    
    else {
        return (
            <div className="flex flex-col min-h-screen w-full items-center justify-center">
                <p>Safari Not Found.</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-start bg-white w-full pt-40 px-24">

            {/* title */}
            <div className="flex flex-col space-y-4 items-center justify-between w-full">
                <hr className="border border-black w-full " />
                <h1 className="text-4xl text-black font-bold">4-Days Maasai Mara Kenyan Safari</h1>
                <hr className="border border-black w-full " />
            </div>



            {/* destination image */}
            <Image src="/popular-tours/maasai-mara.jpg" alt="Maasai Mara scenic picture" width={900} height={300} className="mt-30 w-11/12" />


            {/* destination details */}
            <div className="flex flex-col w-11/12 h-60 bg-black my-20 items-center">

                <div className="flex items-center h-1/2 w-full">

                    {/* destination */}
                    <div className="flex flex-col items-start justify-center px-8 border-r border-white w-1/4 h-9/12">
                        <div className="flex items-center"><FaLocationDot className="mr-2 text-white" size={18} /> <p className="text-white text-lg font-normal">Destination:</p></div>
                        <p className="text-yellow-400 text-lg font-normal">Kenya</p>
                    </div>


                    {/* duration */}
                    <div className="flex flex-col items-start justify-center px-8 border-r border-white w-1/4 h-9/12">
                        <div className="flex items-center"><FaRegClock className="mr-2 text-white" size={18} /> <p className="text-white text-lg font-normal">Duration:</p></div>
                        <p className="text-yellow-400 text-lg font-normal">Kenya</p>
                    </div>


                    {/* dates */}
                    <div className="flex flex-col items-start justify-center px-8 border-r border-white w-1/4 h-9/12">
                        <div className="flex items-center"><FaCalendarDays className="mr-2 text-white" size={18} /> <p className="text-white text-lg font-normal">Dates:</p></div>
                        <p className="text-yellow-400 text-lg font-normal">Kenya</p>
                    </div>



                    {/* group size */}
                    <div className="flex flex-col items-start justify-center px-8 border-r border-white w-1/4 h-9/12">
                        <div className="flex items-center"><HiOutlineUserGroup className="mr-2 text-white" size={18} /> <p className="text-white text-lg font-normal">Group size:</p></div>
                        <p className="text-yellow-400 text-lg font-normal">Max 18 people</p>
                    </div>



                </div>

                <hr className="border border-white w-10/12" />

                <div className="flex flex-col items-center justify-center w-full h-1/2 space-y-2">

                    {/* price */}
                    <div className="flex items-center"><AiOutlineDollar size={18} className="mr-2 text-white" /><p className="text-white text-lg font-normal">Price:</p> <span className="text-yellow-400 text-lg font-normal ml-2">From $3800/person</span></div>

                    {/* book tour and contact us buttons */}

                    <div className="flex items-center justify-center space-x-8 w-full">
                        <Link href={""} className="flex justify-center items-center bg-yellow-400 text-black px-8 py-2 font-medium w-3/12">Book tour <HiArrowLongRight size={18} className="ml-4 text-black" /></Link>
                        <Link href={""} className=" flex justify-center border-2 border-white text-white px-8 py-2 font-medium w-3/12">Contact us</Link>
                    </div>

                </div>

            </div>


            {/* information area - with details, itinerary, gallery area tabs*/}

            <TourDetails safari={safari} />

            {/* faqs */}



            {/* view more tours section without the one currently being displayed */}




        </div>
    );
}