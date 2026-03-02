import Image from 'next/image';
import { Stars } from '@/components/stars';

export function ClientTestimonialCard ({name, testimonial, country, image, image_right}: {name: string; image: string; testimonial: string; country: string; image_right: boolean}) {
    return (
        <div className="w-200 h-100 flex items-center justify-center border-2 border-white">

            {/* image right */}

            {image_right && (<div className="relative h-full w-2/5">
                <Image src={image} alt={testimonial} className="object-cover" fill priority />
            </div>)}

            {/* details */}
            <div className="flex flex-col items-start justify-center space-y-4 py-10 px-10 flex-1">
                <Stars />
                <p className="font-bold text-white text-xl">{name}</p>
                <p className="font-medium text-white text-md">"{testimonial}"</p>
                <p className="font-medium text-yellow-400">{country}</p>
            </div>

            {/* image left */}

            {!image_right && (<div className="relative h-full w-2/5">
                <Image src={image} alt={testimonial} className="object-cover" fill priority />
            </div>)}
            
        </div>
    );
}