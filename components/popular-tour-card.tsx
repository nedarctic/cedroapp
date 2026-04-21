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
      className="flex flex-col w-full border border-black bg-white overflow-hidden hover:shadow-lg transition"
    >
      {/* Image */}
      <div className="relative w-full h-52 sm:h-56 md:h-60 lg:h-64">

        <div className="absolute inset-0 z-10 bg-black/40" />

        <p className="absolute left-2 top-2 bg-yellow-400 px-2 py-1 text-xs sm:text-sm text-black font-medium z-20">
          Popular
        </p>

        {special_offer && (
          <p className="absolute left-2 top-10 bg-yellow-400 px-2 py-1 text-xs sm:text-sm text-black font-medium z-20">
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
                 (max-width: 1024px) 50vw,
                 33vw"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col px-4 sm:px-5 py-4 space-y-4">

        <p className="text-black text-lg sm:text-xl font-medium">
          {title}
        </p>

        <div className="flex flex-col space-y-3 text-sm sm:text-base">

          <div className="flex justify-between items-center">
            <span className="flex items-center">
              <FaLocationDot className="mr-2" />
              Destination:
            </span>
            <span className="text-gray-600">{destination}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="flex items-center">
              <FaRegClock className="mr-2" />
              Duration:
            </span>
            <span className="text-gray-600">{duration}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="flex items-center">
              <FaCalendarDays className="mr-2" />
              Dates:
            </span>
            <span className="text-gray-600">{dates}</span>
          </div>

          {group_size && (
            <div className="flex justify-between items-center">
              <span className="flex items-center">
                <HiOutlineUserGroup className="mr-2" />
                Group:
              </span>
              <span className="text-gray-600">{group_size}</span>
            </div>
          )}

          <div className="flex justify-between items-center border border-black px-3 py-2 mt-2">
            <span>Price:</span>
            <span className="font-medium">{price}</span>
          </div>

        </div>
      </div>
    </Link>
  );
}