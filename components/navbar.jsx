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
    const currentPath = router.pathname;

    function navigate() {
        router.push('/marine')
    }

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <div className={`${kavoon.className} flex justify-between sm:p-0 sm:mt-6  p-6 sm:justify-around text-[#397346]`}>
                <div className="flex space-x-2 sm:-ml-32">
                    <p className=""> Trip </p>
                    <img src='./icons/globe.png' className="w-7 h-7" />
                    <p> vita </p>
                </div>
                <div className={`${lexend.className} sm:visible hidden  text-[#939393] text-sm sm:flex sm:space-x-16`}>
                    <button
                        className="hover:bg-slate-400 transition-all hover:text-white p-2 rounded-md"
                        onClick={() => currentPath === '/' || currentPath === '/homepage' ? scrollToSection("reviews") : router.push('/homepage')}
                    >
                        {currentPath === '/' || currentPath === '/homepage' ? 'Reviews' : 'Home'}
                    </button>
                    <button
                        className="hover:bg-slate-400 transition-all hover:text-white p-2 rounded-md"
                        onClick={() => scrollToSection("tour")}
                    >
                        Tour
                    </button>
                    <button
                        className="hover:bg-slate-400 transition-all hover:text-white p-2 rounded-md"
                        onClick={() => currentPath === '/marine' ? scrollToSection("whyus") : router.push('/marine')}
                    >
                        {currentPath === '/marine' ? 'Why Us?' : 'Marine'}
                    </button>
                    <button
                        className="hover:bg-slate-400 transition-all hover:text-white p-2 rounded-md"
                        onClick={() => scrollToSection("about")}
                    >
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