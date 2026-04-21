import Image from "next/image";

export function TravelStoryCard({ image, title, story, date }: { image: string; title: string; story: string; date: string }) {
    return (
        <div className="flex flex-col h-auto sm:h-[450px] md:h-[480px] lg:h-[500px] w-full bg-white shadow-[6px_6px_0px_rgba(0,0,1)] border border-black transition-transform hover:transform hover:-translate-y-1 duration-300">

            {/* image */}
            <div className="relative h-48 sm:h-56 md:h-64 lg:h-1/2 w-full overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority
                />
            </div>

            {/* details */}
            <div className="flex flex-col items-start justify-start p-4 sm:p-5 md:p-6 lg:p-8 space-y-2 sm:space-y-3 md:space-y-4 flex-1">

                {/* date */}
                <p className="text-black font-normal text-xs sm:text-sm">{date}</p>

                {/* title */}
                <p className="text-black font-medium text-base sm:text-lg md:text-xl lg:text-2xl line-clamp-2">{title}</p>

                {/* description */}
                <p className="text-black font-normal text-sm sm:text-base line-clamp-3 sm:line-clamp-4 md:line-clamp-5">
                    {story}
                </p>

            </div>
        </div>
    );
}