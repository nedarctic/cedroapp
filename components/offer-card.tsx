import { IconType } from "react-icons";
import Image from "next/image";

export function OfferCard ({Logo, title, description, image, image_right}: {Logo: IconType; title: string; description: string; image: string, image_right: boolean}) {
    return (
        <div className="flex items-start justify-center border-2 border-black w-3/4 h-96">

            {/* offer left image */}
            {!image_right && (<div className="relative h-full w-3/5">
                <Image src={image} alt={title} fill priority className="object-cover" />
            </div>)}
            
            {/* offer details */}
            <div className="flex flex-col items-center justify-center space-y-4 w-2/5 py-14 px-8">
                {<Logo className="w-12 h-12 text-black" />}
                <p className="font-bold text-xl text-black">{title}</p>
                <p className="font-light text-lg text-black">{description}</p>
            </div>

            {/* offer right image */}
            {image_right && (<div className="relative h-full w-3/5">
                <Image src={image} alt={title} fill priority className="object-cover" />
            </div>)}
        </div>
    );
}