"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import data from '../../../data.json'
import { Lexend } from "next/font/google"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const lexend = Lexend({
    weight: ['200', '300', '500'],
    subsets: ['latin']
})

export function CarouselPlugin() {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )

    return (
        <div className="mt-[42rem]">
            <Carousel
                plugins={[plugin.current]}
                className="max-w-6xl mt-6"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
            >
                <CarouselContent>
                    {
                        data.map((x, i) => {
                            return (
                                <div key={i}>
                                    <CarouselItem className={`${lexend.className}`}>
                                        <div className="flex items-center justify-center">
                                            <Card className="w-[48rem] h-[24rem] bg-[url('/ship.webp')]">
                                                <CardContent className="text-white flex flex-col justify-end h-full p-4">
                                                    <div>
                                                        <h2 className="font-medium"> {x.title} </h2>
                                                        <p className="font-light"> {x.subtitle}  </p>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </CarouselItem>
                                </div>
                            )
                        })
                    }
                </CarouselContent>
            </Carousel>
            <Carousel
                plugins={[plugin.current]}
                className="max-w-6xl mt-6"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
            >
                <CarouselContent
                >


                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index} className="p-1 ">
                            <div className="flex items-center justify-center">
                                <Card className="w-[52rem] h-[24rem]">
                                    <CardContent className="flex items-center justify-center p-6">
                                        <span className="text-4xl font-semibold">{index + 1}</span>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}
