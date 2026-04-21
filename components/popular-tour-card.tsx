import Image from "next/image";
import Link from 'next/link';
import { FaLocationDot, FaRegClock, FaCalendarDays } from "react-icons/fa6";
import { HiOutlineUserGroup } from "react-icons/hi";

export function PopularTourCard({
  title,
  destination,
  duration,
  dates,
  group_size,
  special_offer,
  price,
  image,
  link,
}: {
  title: string;
  destination: string;
  duration: string;
  dates: string;
  group_size?: string;
  special_offer?: boolean;
  price: string;
  image: string;
  link: string;
}) {
  return (
    <Link
      href={link}
      className="flex flex-col w-full h-full border border-black bg-white overflow-hidden hover:shadow-lg transition-transform hover:scale-[1.02] duration-300"
    >
      {/* Image */}
      <div className="relative w-full h-48 sm:h-52 md:h-56 lg:h-64">

        <div className="absolute inset-0 z-10 bg-black/40" />

        <p className="absolute left-2 top-2 bg-yellow-400 px-2 py-1 text-xs sm:text-sm text-black font-medium z-20">
          Popular
        </p>

        {special_offer && (
          <p className="absolute left-2 top-10 sm:top-12 bg-yellow-400 px-2 py-1 text-xs sm:text-sm text-black font-medium z-20">
            Special Offer
          </p>
        )}

        <Image
          src={image}
          alt={title}
          fill
          priority
          className="object-cover"
          sizes="(max-width: 640px) 100vw,
                 (max-width: 768px) 100vw,
                 (max-width: 1024px) 50vw,
                 (max-width: 1280px) 33vw,
                 25vw"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-3 sm:p-4 md:p-5 space-y-3 sm:space-y-4">

        <p className="text-black text-base sm:text-lg md:text-xl font-medium line-clamp-2">
          {title}
        </p>

        <div className="flex flex-col space-y-2 sm:space-y-3 text-xs sm:text-sm md:text-base">

          <div className="flex justify-between items-center gap-2">
            <span className="flex items-center shrink-0">
              <FaLocationDot className="mr-1 sm:mr-2 shrink-0" />
              <span className="sr-only sm:not-sr-only">Destination:</span>
            </span>
            <span className="text-gray-600 text-right truncate">{destination}</span>
          </div>

          <div className="flex justify-between items-center gap-2">
            <span className="flex items-center shrink-0">
              <FaRegClock className="mr-1 sm:mr-2 shrink-0" />
              <span className="sr-only sm:not-sr-only">Duration:</span>
            </span>
            <span className="text-gray-600 text-right truncate">{duration}</span>
          </div>

          <div className="flex justify-between items-center gap-2">
            <span className="flex items-center shrink-0">
              <FaCalendarDays className="mr-1 sm:mr-2 shrink-0" />
              <span className="sr-only sm:not-sr-only">Dates:</span>
            </span>
            <span className="text-gray-600 text-right truncate">{dates}</span>
          </div>

          {group_size && (
            <div className="flex justify-between items-center gap-2">
              <span className="flex items-center shrink-0">
                <HiOutlineUserGroup className="mr-1 sm:mr-2 shrink-0" />
                <span className="sr-only sm:not-sr-only">Group:</span>
              </span>
              <span className="text-gray-600 text-right truncate">{group_size}</span>
            </div>
          )}

          <div className="flex justify-between items-center border border-black px-2 sm:px-3 py-1.5 sm:py-2 mt-1 sm:mt-2">
            <span className="text-xs sm:text-sm">Price:</span>
            <span className="font-medium text-sm sm:text-base truncate ml-2">{price}</span>
          </div>

        </div>
      </div>
    </Link>
  );
}