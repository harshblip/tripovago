import Navbar from "../components/navbar";
import { Kavoon, Lexend } from "next/font/google";
import data from '../src/data.json'

const kavoon = Kavoon({
    weight: ['400'],
    subsets: ['latin']
})

const lexend = Lexend({
    weight: ['200', '300', '400', '500'],
    subsets: ['latin']
})

export default function Marine() {
    return (
        <>
            <div className="page">
                <Navbar />
                <div className="mt-4">
                    <img src='./images/marineships.webp' className="w-full h-[24rem] object-cover rounded-xl" />
                    <p className={`text-[#0FA4C2] ${kavoon.className} -mt-52 sm:-mt-48 sm:ml-36 text-4xl`}> Marine </p>
                </div>
                <div className={`${lexend.className} w-full max-w-screen-xl mx-auto p-4 mt-44`}>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 sm:ml-[15rem]">
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
                    </div>
                </div>
                <div className={`flex flex-col sm:flex-row ${lexend.className} mt-12`}>
                    <img src='./images/marine.webp' className="w-[40rem]" />
                    <div className="flex flex-col mt-10">
                        <p className="text-3xl font-medium text-[#0FA4C2]">Marine travel solutions
                            for seafarers</p>
                        <p className="text-sm leading-8 mt-8 text-[#2C7681]"> Navigating the complexities of <span className="text-2xl">seafarer</span> travel, Marine provides cost- <span className="text-2xl">effective</span> and competitive solutions  tailored for the <span className="text-2xl">marine</span> industry.</p>

                        <p className="text-sm leading-8 mt-6 text-[#2C7681]">We  <span className="text-2xl"> specialize </span>  in seamless travel management,  offering exclusive access to global <span className="text-2xl">seaman</span> fares and  ensuring <span className="text-2xl">smooth</span> , hassle-free journeys for seafarers worldwide. </p>
                    </div>
                </div>
                <div className={`${lexend.className} mt-12 flex flex-col`}>
                    <p className="font-medium text-4xl ml-8 text-[#0FA4C2]"> Why choose us ? </p>
                    <div className="flex sm:flex-row flex-col space-y-10 sm:ml-0  sm:space-x-20 justify-center mt-8 w-full max-w-screen-xl mx-auto">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                            {
                                data.map((x, i) => {
                                    return (
                                        x.type === "marine" ? <div className="bg-[#198797] shadow-lg rounded-lg flex flex-col justify-center items-center text-white space-y-8 h-[14rem] w-[10rem] sm:w-[12rem]">
                                            <img src={x.icon} className="w-12 border-white" />
                                            <pre className={`${lexend.className} font-medium text-sm flex justify-center items-center`}> {x.title} </pre>
                                        </div> : ''
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="mt-24 flex justify-between">
                    <div className={`sm:ml-12 flex flex-col space-y-2 ${lexend.className}`}>
                        <p className="text-md sm:text-lg text-[#91C2CA]"> to know more </p>
                        <p className="text-2xl sm:text-4xl font-medium text-[#0EA4C2]"> Contact Us </p>
                    </div>
                    <div className={`${lexend.className} flex flex-col mr-12`}>
                        <div className="flex space-x-4">
                            <img src='./images/Phone.png' className="w-6 sm:h-6 h-5" />
                            <div className="flex sm:flex-row flex-col space-x-4">
                                <p className="sm:text-md text-sm font-normal text-[#327C88]"> +91 8860922191 </p>
                                <p className="sm:text-md text-sm font-normal text-[#327C88]"> +91 7982769510 </p>
                            </div>
                        </div>
                        <div className="flex space-x-4 mt-4 ml-1">
                            <img src='./images/Gmail.png' className="w-6" />
                            <p className="text-md font-normal text-[#327C88]"> tripovita@gmail.com </p>
                        </div>
                    </div>
                </div>
            </div>
            <img src='./images/vector.png' className="sm:w-full h-44 sm:object-fill object-cover" />
        </>
    )
}