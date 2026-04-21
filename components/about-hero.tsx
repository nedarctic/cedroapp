import Image from 'next/image';

export function AboutHero({ image, image_description, title1, title2, description1, description2 }: { 
    image: string; 
    title1: string; 
    title2: string; 
    description1: string; 
    description2: string; 
    image_description: string;
}) {
    return (
        <div className="w-full border-2 border-black flex flex-col overflow-hidden">
            
            {/* image - responsive height */}
            <div className="relative h-48 sm:h-64 md:h-80 lg:h-96 w-full">
                <Image 
                    src={image} 
                    alt={image_description} 
                    className="object-cover" 
                    fill 
                    priority
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
                />
            </div>

            {/* bottom section with title1, title2, description1, description2 - responsive layout */}
            <div className="flex flex-col sm:flex-row border-t border-black flex-1">
                
                {/* First column - Our Mission */}
                <div className="flex flex-col justify-center space-y-2 sm:space-y-3 w-full sm:w-1/2 p-4 sm:p-6 md:p-8 lg:p-10 border-b sm:border-b-0 sm:border-r border-black">
                    <h1 className="text-black font-bold text-xl sm:text-2xl md:text-3xl">
                        {title1}
                    </h1>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg font-normal leading-relaxed">
                        {description1}
                    </p>
                </div>
                
                {/* Second column - Why Choose Us */}
                <div className="flex flex-col justify-center space-y-2 sm:space-y-3 w-full sm:w-1/2 p-4 sm:p-6 md:p-8 lg:p-10">
                    <h1 className="text-black font-bold text-xl sm:text-2xl md:text-3xl">
                        {title2}
                    </h1>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg font-normal leading-relaxed">
                        {description2}
                    </p>
                </div>
            </div>
        </div>
    );
}