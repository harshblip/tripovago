import Image from "next/image";
import { CarouselPlugin } from "../components/carousel";
import Navbar from "../components/navbar";
import { Lexend } from "next/font/google";
import Howitworks from "../components/howitworks";
import TouristPackages from "../components/touristPackages";
import Footer from "../components/footer";
import Modal from "../components/modal";
import { useState } from "react";
import ExploreWorld from "../components/exploreWorld";
import Comments from "../components/comments";

const lexend = Lexend({
    weight: ['200', '300', '400', '500'],
    subsets: ['latin']
})

export default function Home() {
    const [click, setClick] = useState(false);

    return (
        <div
            onBlur={() => setClick(false)}
        >
            <Navbar />
            <CarouselPlugin />
            <div className={`${lexend.className} w-full max-w-screen-xl mx-auto p-4 sm:mt-8`}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="bg-[#ffffff] h-40 rounded-[1.5rem] shadow-lg flex justify-center items-center flex-col">
                        <p className="sm:text-4xl text-2xl font-medium text-[#737373]"> 200k+ </p>
                        <p className="mt-2 text-[#c2c2c2] text-xs sm:text-sm"> Total customers </p>
                    </div>
                    <div className="bg-[#ffffff] h-40 rounded-[1.5rem] shadow-lg flex justify-center items-center flex-col">
                        <p className="sm:text-4xl text-2xl font-medium text-[#737373]"> 10+ </p>
                        <p className="mt-2 text-[#c2c2c2] text-xs sm:text-sm"> Years of experience </p>
                    </div>
                    <div className="bg-[#ffffff] h-40 rounded-[1.5rem] shadow-lg flex justify-center items-center flex-col">
                        <p className="sm:text-4xl text-2xl font-medium text-[#737373]"> 40+ </p>
                        <p className="mt-2 text-[#c2c2c2] text-xs sm:text-sm"> Destinations </p>
                    </div>
                    <div className="bg-[#ffffff] h-40 rounded-[1.5rem] shadow-lg flex justify-center items-center flex-col">
                        <p className="sm:text-4xl text-2xl font-medium text-[#737373]"> 100k+ </p>
                        <p className="mt-2 text-[#c2c2c2] text-xs sm:text-sm"> Satisfied customers </p>
                    </div>
                </div>
            </div>
            <ExploreWorld
                setClick={setClick}
            />
            <Howitworks
                setClick={setClick}
            />
            <TouristPackages
                setClick={setClick}
            />
            <Comments />
            <Footer />
            {click && (
                <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50"
                >
                    <Modal />
                </div>
            )}
        </div>
    );
}

