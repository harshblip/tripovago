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
            <div className={`${kavoon.className} w-[100%] flex justify-around text-[#397346]`}>
                <div className="flex space-x-2 -ml-32">
                    <p className=""> Trip </p>
                    <img src='./icons/globe.png' className="w-6" />
                    <p> vita </p>
                </div>
                <div className={`${lexend.className} text-[#939393] text-sm flex space-x-16`}>
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
                <div className="text-[#939393] text-sm -mr-32">
                    <p> Bon Voyage! ⛵🌊  </p>
                </div>
            </div>
        </>
    )
}