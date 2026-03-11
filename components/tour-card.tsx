import Image from "next/image";
import Link from "next/link";

interface TourCardProps {
  title: string;
  intro: string;
  duration: string;
  group_size: string;
  price: string;
  heroImage: string;
  slug: string;
}

export function TourCard({
  title,
  intro,
  duration,
  group_size,
  price,
  heroImage,
  slug,
}: TourCardProps) {
  return (
    <div className="flex flex-col bg-white border-2 border-black shadow-[6px_6px_0px_rgba(0,0,0,1)]">

      {/* image */}
      <div className="relative w-full aspect-4/3 border-b-2 border-black">
        <Image
          src={heroImage}
          alt={title}
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* content */}
      <div className="flex flex-col p-6 space-y-4">

        <h2 className="text-black font-bold text-xl">
          {title}
        </h2>

        <p className="text-black font-normal text-md line-clamp-4">
          {intro}
        </p>

        {/* meta */}
        <div className="flex flex-wrap gap-4 text-sm text-black font-medium">
          <span>{duration}</span>
          <span>{group_size}</span>
        </div>

        {/* price + CTA */}
        <div className="flex items-center justify-between pt-4">
          <p className="text-black font-bold text-lg">
            {price}
          </p>

          <Link
            href={`/book/${slug}`}
            className="border-2 border-black px-6 py-2 font-bold text-black hover:bg-black hover:text-white transition"
          >
            View Tour
          </Link>
        </div>

      </div>
    </div>
  );
}