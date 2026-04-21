import Image from 'next/image';
import { Stars } from '@/components/stars';

export function ClientTestimonialCard({ name, testimonial, country, image, image_right }: { 
    name: string; 
    image: string; 
    testimonial: string; 
    country: string; 
    image_right: boolean;
}) {
    return (
        <div className="w-full sm:w-10/12 mx-auto h-full flex flex-col sm:flex-row items-stretch border-2 border-white overflow-hidden bg-black/50 backdrop-blur-sm">
            
            {/* Image left side */}
            {!image_right && (
                <div className="relative w-full sm:w-2/5 lg:w-1/3 h-64 sm:h-auto overflow-hidden sm:flex-shrink-0">
                    <Image 
                        src={image} 
                        alt={`${name} testimonial`} 
                        className="object-cover" 
                        fill 
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 40vw, 33vw"
                        priority 
                    />
                </div>
            )}

            {/* Details section */}
            <div className="flex flex-col items-start justify-center space-y-3 sm:space-y-4 py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-8 lg:px-10 flex-1 min-w-0">
                <div className="transform scale-90 sm:scale-100 origin-left">
                    <Stars />
                </div>
                <p className="font-bold text-white text-lg sm:text-xl md:text-2xl break-words w-full">{name}</p>
                <p className="font-medium text-white/90 text-sm sm:text-base md:text-lg leading-relaxed break-words w-full line-clamp-3 sm:line-clamp-4 md:line-clamp-none">
                    "{testimonial}"
                </p>
                <p className="font-medium text-yellow-400 text-sm sm:text-base break-words w-full">{country}</p>
            </div>

            {/* Image right side */}
            {image_right && (
                <div className="relative w-full sm:w-2/5 lg:w-1/3 h-64 sm:h-auto overflow-hidden sm:flex-shrink-0 sm:order-last">
                    <Image 
                        src={image} 
                        alt={`${name} testimonial`} 
                        className="object-cover" 
                        fill 
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 40vw, 33vw"
                        priority 
                    />
                </div>
            )}
        </div>
    );
}