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
    weight: ['200', '300', '400', '500'],
    subsets: ['latin']
})

export default function Comments() {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )

    return (
        <div
            className="mt-[2rem]"
            id="reviews"
        >
            <div className={`${lexend.className} flex`}>
                <div className="flex flex-col space-y-1 ml-12">
                    <p className="text-md text-[#BDBDBD]"> look what our customers say </p>
                    <p className="text-4xl text-[#34818D] font-medium"> Customer reviews ! </p>
                </div>
            </div>
            <Carousel
                plugins={[plugin.current]}
                className="sm:w-[68rem] w-[24rem] mt-[2rem] mr-4 sm:mr-0"
            >
                <CarouselContent>
                    {
                        data.map((x, i) => {
                            return (
                                x.type === "reviews" ?
                                    <div key={i}>
                                        <CarouselItem className={`${lexend.className}`}>
                                            <div className="flex  items-center justify-center">
                                                <Card className={`sm:w-[60rem] w-[24rem] h-[24rem] sm:h-[14rem] shadow-lg`}>
                                                    <CardContent className="text-gray flex flex-col sm:flex-row items-center h-full p-6">
                                                        <div className="flex items-center sm:-ml-0 -ml-20">
                                                            <img src={x.pfp} className="w-14 h-14 rounded-full" />
                                                            <div className="flex flex-col ml-6">
                                                                <h2 className="mb-1 font-medium text-md"> {x.name} </h2>
                                                            </div>
                                                        </div>
                                                        <div className="ml-8 sm:mt-0 mt-6 sm:ml-[6rem] mr-[2rem] text-[#A0A0A0] font-medium flex flex-col">
                                                            <p className="text-sm"> {x.comment}  </p>
                                                            <p className="font-light text-[0.6rem] mt-6"> {x.tourPackage}  </p>
                                                        </div>
                                                    </CardContent>
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