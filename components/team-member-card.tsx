import Image from 'next/image';

export function TeamMemberCard ({image, name, designation, description}: {image: string; name: string; designation: string; description: string}) {
    return (
        <div className="flex flex-col bg-black border-2 border-white h-150 w-94">

            {/* image */}
            <div className="relative h-3/4 w-full">
                <Image src={image} alt={name} className={"object-cover"} fill priority />
            </div>

            {/* details */}
            <div className="flex flex-col items-start justify-center p-10 space-y-2">

                {/* name */}
                <p className="text-white font-medium text-2xl">{name}</p>

                {/* designation */}
                <p className="text-yellow-400 font-medium text-xl">{designation}</p>

                {/* description */}
                <p className="text-white font-light text-sm">{description}</p>
            </div>

        </div>
    );
}