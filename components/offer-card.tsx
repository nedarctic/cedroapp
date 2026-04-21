import { IconType } from "react-icons";
import Image from "next/image";

export function OfferCard({
  Logo,
  title,
  description,
  image,
  image_right,
}: {
  Logo: IconType;
  title: string;
  description: string;
  image: string;
  image_right: boolean;
}) {
  return (
    <div className="flex flex-col md:flex-row items-center border border-black w-11/12 overflow-hidden">

      {/* Image */}
      <div
        className={`relative w-full md:w-1/2 h-64 sm:h-72 md:h-80 ${
          image_right ? 'md:order-2' : 'md:order-1'
        }`}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>

      {/* Content */}
      <div
        className={`flex flex-col items-center text-center md:text-left justify-center space-y-4 w-full md:w-1/2 py-8 px-6 sm:px-8 ${
          image_right ? 'md:order-1' : 'md:order-2'
        }`}
      >
        <Logo className="w-10 h-10 sm:w-12 sm:h-12 text-black" />
        <p className="font-bold text-lg sm:text-xl text-black">{title}</p>
        <p className="font-light text-sm sm:text-base text-black">
          {description}
        </p>
      </div>
    </div>
  );
}