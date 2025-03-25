"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import useEmblaCarousel from "embla-carousel-react"
import { useCallback } from "react"
import data from '../src/data.json'
import { Lexend } from "next/font/google"
import { Card, CardContent } from "@/components/ui/card"

const lexend = Lexend({
    weight: ['200', '300', '500'],
    subsets: ['latin']
})

export function CarouselPlugin() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
        Autoplay({ delay: 3000, stopOnInteraction: false })
    ]);

    // Optional: Pause autoplay on hover
    const onMouseEnter = useCallback(() => {
        if (emblaApi && emblaApi.plugins().autoplay) {
            emblaApi.plugins().autoplay.stop();
        }
    }, [emblaApi]);

    const onMouseLeave = useCallback(() => {
        if (emblaApi && emblaApi.plugins().autoplay) {
            emblaApi.plugins().autoplay.play();
        }
    }, [emblaApi]);

    return (
        <div className="flex justify-center mt-[2rem]">
            <div
                className="embla relative sm:w-[90rem] w-[24rem]"
                ref={emblaRef}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <div className="embla__container">
                    {data.map((x, i) => (
                        x.type === "carousel" && (
                            <div className="embla__slide flex-[0_0_100%] min-w-0" key={i}>
                                <div className={`${lexend.className}`}>
                                    <div className="flex items-center justify-center">
                                        <Card className={`sm:w-[90rem] w-[24rem] h-[24rem] sm:h-[28rem] bg-no-repeat bg-cover bg-center ${x.id === 2 ? `bg-no-repeat bg-[length:100%]` : ``}`}
                                            style={{ backgroundImage: `url(${x.bg})` }}>
                                            {x.id === 2 ? (
                                                <CardContent className="text-white flex flex-col h-full p-6">
                                                    <div>
                                                        <h2 className="font-medium text-4xl leading-[3.5rem]">
                                                            {x.title1} <br /> {x.title2} <br /> {x.title3}
                                                        </h2>
                                                        <p className="font-light mt-4">{x.subtitle}</p>
                                                    </div>
                                                </CardContent>
                                            ) : (
                                                <CardContent className="text-white flex flex-col justify-end h-full p-6">
                                                    <div>
                                                        <h2 className="mb-1 font-medium text-2xl">{x.title}</h2>
                                                        <p className="font-light text-sm">{x.subtitle}</p>
                                                    </div>
                                                </CardContent>
                                            )}
                                        </Card>
                                    </div>
                                </div>
                            </div>
                        )
                    ))}
                </div>
            </div>
        </div>
    )
}
