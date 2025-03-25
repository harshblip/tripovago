"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { useCallback } from "react"
import data from '../src/data.json'
import { Lexend } from "next/font/google"
import useEmblaCarousel from "embla-carousel-react"

import { Card, CardContent } from "@/components/ui/card"
const lexend = Lexend({
    weight: ['200', '300', '400', '500'],
    subsets: ['latin']
})

export default function Comments() {
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
        <div
            className="mt-[2rem]"
            id="reviews"
        >
            <div className={`${lexend.className} flex`}>
                <div className="flex flex-col space-y-1 ml-4 sm:ml-12">
                    <p className="text-md text-[#BDBDBD]"> look what our customers say </p>
                    <p className="text-4xl text-[#34818D] font-medium"> Customer reviews ! </p>
                </div>
            </div>
            <div className="flex justify-center">
                <div
                    className="embla relative sm:w-[70rem] w-[24rem] mt-[4rem] mr-4 ml-0 sm:-ml-44 sm:mr-0"
                    ref={emblaRef}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >
                    <div className="embla__container">
                        {data.map((x, i) => (
                            x.type === "reviews" && (
                                <div className="embla__slide flex-[0_0_100%] min-w-0" key={i}>
                                    <div className={`${lexend.className}`}>
                                        <div className="flex items-center justify-center">
                                            <Card className={`sm:w-[68rem] w-[24rem] h-[24rem] sm:h-[18rem] shadow-lg`}>
                                                <CardContent className="text-gray flex flex-col sm:flex-row items-center h-full p-6">
                                                    <div className="flex items-center sm:-ml-0 -ml-20">
                                                        <img src={x.pfp} className="w-20 h-20 rounded-full" alt={x.name} />
                                                        <div className="flex flex-col ml-6">
                                                            <h2 className="mb-1 font-medium text-xl">{x.name}</h2>
                                                        </div>
                                                    </div>
                                                    <div className="ml-8 sm:mt-0 mt-6 sm:ml-[6rem] mr-[2rem] text-[#A0A0A0] font-medium flex flex-col">
                                                        <p className="text-md">{x.comment}</p>
                                                        <p className="font-light text-sm mt-6">{x.tourPackage}</p>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </div>
                                </div>
                            )
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}