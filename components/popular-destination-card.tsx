import Image from "next/image";

export function PopularDestinationCard({
  image,
  destination,
  tours,
}: {
  image: string;
  destination: string;
  tours: number;
}) {
  return (
    <div className="group relative w-full h-64 sm:h-72 md:h-80 lg:h-96 overflow-hidden border border-white">

      {/* overlay */}
      <div className="absolute inset-0 bg-black/40 z-10 transition-opacity duration-300 group-hover:opacity-0" />

      {/* image */}
      <Image
        src={image}
        alt={destination}
        fill
        priority
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        sizes="(max-width: 640px) 100vw,
               (max-width: 1024px) 50vw,
               33vw"
      />

      {/* destination */}
      <p className="absolute z-20 text-white text-lg sm:text-xl md:text-2xl font-medium text-center w-full top-1/2 -translate-y-1/2 px-2">
        {destination}
      </p>

      {/* tours */}
      <p className="absolute left-2 bottom-2 bg-yellow-400 px-2 py-1 text-black text-xs sm:text-sm font-medium z-20">
        {tours} Tour{tours !== 1 && "s"}
      </p>
    </div>
  );
}