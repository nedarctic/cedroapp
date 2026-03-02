import Image from "next/image";

export function PopularDestinationCard({ image, destination, tours }: { image: string; destination: string; tours: number }) {
    return (
        <div className="group flex flex-col justify-center items-center relative h-75 w-125 overflow-hidden border border-white">

            {/* overlay */}
            <div className="absolute w-full h-full bg-black/40 inset-0 z-10 transition-opacity duration-300 group-hover:opacity-0 pointer-events-none" />

            {/* destination image */}
            <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110">
                <Image src={image} alt={destination} fill priority className="object-cover transition-transform duration-500 ease-out group-hover:scale-110" />
            </div>

            {/* destination */}
            <p className="text-white text-2xl font-medium z-20">{destination}</p>

            {/* tours */}
            <p className="absolute left-2 bottom-2 bg-yellow-400 px-2 py-1 text-black text-sm font-medium z-20">{`${tours} Tour`}</p>
        </div>
    );
}