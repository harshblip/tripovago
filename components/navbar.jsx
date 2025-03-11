"use client"

import { Kavoon, Lexend } from "next/font/google"
import { useRouter } from "next/router"

const kavoon = Kavoon({
    weight: ['400'],
    subsets: ['latin']
})

const lexend = Lexend({
    weight: ['200', '300', '500'],
    subsets: ['latin']
})

export default function Navbar() {

    const router = useRouter();

    function navigate() {
        router.push('/marine')
    }

    return (
        <>
            <div className={`${kavoon.className} flex justify-between sm:justify-around text-[#397346]`}>
                <div className="flex space-x-2 sm:-ml-32">
                    <p className=""> Trip </p>
                    <img src='./icons/globe.png' className="w-7 h-7" />
                    <p> vita </p>
                </div>
                <div className={`${lexend.className} sm:visible hidden  text-[#939393] text-sm sm:flex sm:space-x-16`}>
                    <button className="hover:bg-slate-400 transition-all hover:text-white p-2 rounded-md">
                        Home
                    </button>
                    <button className="hover:bg-slate-400 transition-all hover:text-white p-2 rounded-md">
                        Tour
                    </button>
                    <button
                        className="hover:bg-slate-400 transition-all hover:text-white p-2 rounded-md"
                        onClick={navigate}
                    >
                        Marine
                    </button>
                    <button className="hover:bg-slate-400 transition-all hover:text-white p-2 rounded-md">
                        About
                    </button>
                </div>
                <div className="text-[#2a9d8f] text-md font-normal -mr-0 sm:-mr-32">
                    <p> Bon Voyage! ⛵🌊  </p>
                </div>
            </div>
        </>
    )
}