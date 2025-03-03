import Image from "next/image";
import { CarouselPlugin } from "../components/carousel";
import Navbar from "../components/navbar";
import { Lexend } from "next/font/google";
import Howitworks from "../components/howitworks";
import TouristPackages from "../components/touristPackages";
import Footer from "../components/footer";

const lexend = Lexend({
    weight: ['200', '300', '400', '500'],
    subsets: ['latin']
})

export default function Home() {
    return (
        <>
            <div className="items-center justify-center min-h-screen p-6 page">
                <Navbar />
                <CarouselPlugin />
                <div className={`${lexend.className} w-full max-w-screen-xl mx-auto p-4 mt-44`}>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="bg-[#ffffff] h-40 rounded-[1.5rem] shadow-lg flex justify-center items-center flex-col">
                            <p className="text-4xl font-medium text-[#737373]"> 200k+ </p>
                            <p className="mt-2 text-[#c2c2c2] text-sm"> Total customers </p>
                        </div>
                        <div className="bg-[#ffffff] h-40 rounded-[1.5rem] shadow-lg flex justify-center items-center flex-col">
                            <p className="text-4xl font-medium text-[#737373]"> 10+ </p>
                            <p className="mt-2 text-[#c2c2c2] text-sm"> Years of experience </p>
                        </div>
                        <div className="bg-[#ffffff] h-40 rounded-[1.5rem] shadow-lg flex justify-center items-center flex-col">
                            <p className="text-4xl font-medium text-[#737373]"> 40+ </p>
                            <p className="mt-2 text-[#c2c2c2] text-sm"> Destinations </p>
                        </div>
                        <div className="bg-[#ffffff] h-40 rounded-[1.5rem] shadow-lg flex justify-center items-center flex-col">
                            <p className="text-4xl font-medium text-[#737373]"> 100k+ </p>
                            <p className="mt-2 text-[#c2c2c2] text-sm"> Satisfied customers </p>
                        </div>
                    </div>
                </div>
                <Howitworks />
                <TouristPackages />
                <Footer />
            </div>
        </>
    );
}
