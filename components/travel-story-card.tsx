import Image from "next/image";

export function TravelStoryCard({ image, title, story, date }: { image: string; title: string; story: string; date: string }) {
    return (
        <div className="flex flex-col h-130 w-125 bg-white shadow-[6px_6px_0px_rgba(0,0,0,1)] border border-black">

            {/* image */}
            <div className="relative h-1/2 w-full">
                <Image src={image} alt={"title"} className="object-cover" fill priority />
            </div>

            {/* details */}
            <div className="flex flex-col items-start justify-center p-8 space-y-4">

                {/* date */}
                <p className="text-black font-normal text-sm">{date}</p>

                {/* title */}
                <p className="text-black font-medium text-xl">{title}</p>

                {/* description */}
                <p className="text-black font-normal text-md">{story}</p>

            </div>

        </div>
    );
}