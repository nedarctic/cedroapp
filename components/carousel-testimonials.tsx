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
        <div>
            <Carousel setApi={setApi} className="w-full max-w-4xl">
                <CarouselPrevious />

                <CarouselContent className="mb-4">
                    {testimonials.map(({ country, image, image_right, name, testimonial }, index) => (
                        <CarouselItem key={index}>
                            <ClientTestimonialCard image_right={image_right} image={image} name={name} testimonial={testimonial} country={country} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                
                <CarouselNext />
            </Carousel>
            <div className="py-2 text-center text-sm text-muted-foreground">
                {current} of {count}
            </div>
        </div>
    )
}
