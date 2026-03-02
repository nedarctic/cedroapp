import Image from 'next/image';

export function AboutHero({ image, image_description, title1, title2, description1, description2 }: { image: string; title1: string; title2: string; description1: string; description2: string; image_description: string }) {
    return (
        <div className="h-300 w-250 border-2 border-black flex flex-col">

            {/* image */}
            <div className="relative h-4/5 w-full">
                <Image src={image} alt={image_description} className="object-cover" fill priority  />
            </div>

            {/* bottom section with title1, title2, description1, description2 */}
            <div className="flex border border-black flex-1">
                <div className="flex flex-col justify-center space-y-2 w-1/2 px-10 border-r-2 border-black">
                    <h1 className="text-black text-2xl font-bold">{title1}</h1>
                    <p className="text-black text-lg font-normal">{description1}</p>
                </div>
                <div className="flex flex-col justify-center space-y-2 w-1/2 px-10">
                    <h1 className="text-black text-2xl font-bold">{title2}</h1>
                    <p className="text-black text-lg font-normal">{description2}</p>
                </div>
            </div>
        </div>
    )
}