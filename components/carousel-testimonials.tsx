"use client"

import * as React from "react"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel"
import { ClientTestimonialCard } from "@/components/client-testimonial-card"
import { testimonials } from "@/lib/data"

export function CarouselTestimonial() {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    return (
        <div className="relative w-full px-4 sm:px-6 md:px-8">
            <Carousel 
                setApi={setApi} 
                className="w-full max-w-full overflow-visible"
                opts={{
                    align: "center",
                    loop: true,
                }}
            >
                {/* Navigation buttons - repositioned and properly contained */}
                <div className="hidden sm:block">
                    <CarouselPrevious className="absolute -left-2 md:-left-4 lg:-left-6 top-1/2 -translate-y-1/2" />
                    <CarouselNext className="absolute -right-2 md:-right-4 lg:-right-6 top-1/2 -translate-y-1/2" />
                </div>

                <CarouselContent className="-ml-2 md:-ml-3 lg:-ml-4">
                    {testimonials.map(({ country, image, image_right, name, testimonial }, index) => (
                        <CarouselItem 
                            key={index} 
                            className="pl-2 md:pl-3 lg:pl-4 basis-full"
                        >
                            <div className="flex flex-col items-center w-full overflow-hidden">
                                <ClientTestimonialCard 
                                    image_right={image_right} 
                                    image={image} 
                                    name={name} 
                                    testimonial={testimonial} 
                                    country={country} 
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                
                {/* Mobile navigation buttons */}
                <div className="flex justify-center gap-4 mt-10 sm:hidden">
                    <CarouselPrevious className="static transform-none" />
                    <CarouselNext className="static transform-none" />
                </div>
            </Carousel>
            
            {/* Counter */}
            <div className="py-3 sm:py-4 text-center text-sm text-gray-400">
                <span className="inline-block px-3 py-1 rounded-full bg-white/10">
                    {current} / {count}
                </span>
            </div>
        </div>
    )
}