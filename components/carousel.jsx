"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import data from '../src/data.json'
import { Lexend } from "next/font/google"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
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
        <div className="flex justify-center mt-[2rem]">
            <Carousel
                plugins={[plugin.current]}
                className="sm:w-[72rem] w-[24rem] mt-[0rem] mr-4 sm:mr-0"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
            >
                <CarouselContent>
                    {
                        data.map((x, i) => {
                            return (
                                x.type === "carousel" ?
                                    <div key={i}>
                                        <CarouselItem className={`${lexend.className}`}>
                                            <div className="flex items-center justify-center">
                                                <Card className={`sm:w-[72rem] w-[24rem] h-[24rem] sm:h-[24rem] ${x.id === 2 ? `bg-no-repeat bg-[length:100%]` : ``} `} style={{ backgroundImage: `url(${x.bg})` }}>
                                                    {
                                                        x.id === 2 ? <CardContent className="text-white flex flex-col h-full p-6">
                                                            <div>
                                                                <h2 className="font-medium text-4xl leading-[3.5rem]"> {x.title1} <br/> {x.title2} <br /> {x.title3} </h2>
                                                                <p className="font-light mt-4"> {x.subtitle}  </p>
                                                            </div>
                                                        </CardContent> : <CardContent className="text-white flex flex-col justify-end h-full p-6">
                                                            <div>
                                                                <h2 className="mb-1 font-medium text-2xl"> {x.title} </h2>
                                                                <p className="font-light text-sm"> {x.subtitle}  </p>
                                                            </div>
                                                        </CardContent>
                                                    }
                                                </Card>
                                            </div>
                                        </CarouselItem>
                                    </div> : ''
                            )
                        })
                    }
                </CarouselContent>
            </Carousel>
        </div>
    )
}
