import Image from "next/image";
import Link from 'next/link';
import { FaLocationDot, FaRegClock, FaCalendarDays } from "react-icons/fa6";
import { HiOutlineUserGroup } from "react-icons/hi";

export function PopularTourCard({ title, destination, duration, dates, group_size, special_offer, price, image, link }: { title: string; destination: string; duration: string; dates: string; group_size?: string; special_offer?: boolean; price: string; image: string, link: string }) {
    return (
        <Link href={link} className="flex flex-col space-y-4 justify-start items-start h-150 w-125 border border-black bg-white">

            {/* overlay + image section */}
            <div className="relative w-full h-1/2">

                {/* overlay */}
                <div className="absolute inset-0 z-10 bg-black/50 h-full w-full"></div>

                {/* floating texts */}
                <p className="absolute left-2 top-2 bg-yellow-400 px-2 py-1 text-sm text-black font-medium z-20">Popular</p>
                {special_offer === true && (<p className="absolute left-2 top-10 bg-yellow-400 px-2 py-1 text-sm text-black font-medium z-20">Special Offer</p>)}

                <Image src={image} alt={title} fill priority className="object-cover" />
            </div>

            {/* destination details */}
            <div className="flex flex-col justify-start items-start px-4 space-y-4 w-full">

                {/* title */}
                <p className="text-black text-2xl font-medium">{title}</p>

                {/* other details */}
                <div className="flex flex-col space-y-4 items-start justify-start w-full">
                    <div className="flex w-full items-center justify-between"><div className="flex items-center"><FaLocationDot size={20} className="mr-2" /> <p className="text-md text-black font-normal">Destination:</p></div><p className="text-gray-600 font-normal text-lg">{destination}</p></div>
                    <div className="flex w-full items-center justify-between"><div className="flex items-center"><FaRegClock size={20} className="mr-2" /><p className="text-md text-black font-normal">Duration:</p></div><p className="text-gray-600 font-normal text-lg">{duration}</p></div>
                    <div className="flex w-full items-center justify-between"><div className="flex items-center"><FaCalendarDays size={20} className="mr-2" /><p className="text-md text-black font-normal">Dates:</p></div><p className="text-gray-600 font-normal text-lg">{dates}</p></div>
                    <div className="flex w-full items-center justify-between"><div className="flex items-center"><HiOutlineUserGroup size={20} className="mr-2" /><p className="text-md text-black font-normal">Group size:</p></div><p className="text-gray-600 font-normal text-lg">{group_size}</p></div>
                    <div className="flex w-full items-center justify-between border border-black px-4 py-2"><div><p className="text-md text-black font-normal">Price:</p></div><p className="text-gray-600 font-normal text-lg">{price}</p></div>
                </div>

            </div>

        </Link>
    );
}