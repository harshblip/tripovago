import { Kavoon, Lexend } from "next/font/google"

const kavoon = Kavoon({
    weight: ['400'],
    subsets: ['latin']
})

const lexend = Lexend({
    weight: ['200', '300', '500'],
    subsets: ['latin']
})

export default function Navbar() {
    return (
        <>
            <div className={`${kavoon.className} flex justify-around space-x-2 text-[#397346]`}>
                <div>
                    <p className=""> Trip </p>
                    <img src='./images/globe.png' className="w-6" />
                    <p> vita </p>
                </div>
                <div className={`${lexend.className} text-[#939393] text-sm flex space-x-4`}>
                    <button>
                        Home
                    </button>
                    <button>
                        Tour
                    </button>
                    <button>
                        Marine
                    </button>
                    <button>
                        About
                    </button>
                </div>
                <div className="text-[#939393] text-sm">
                    <p> Bon Voyage! ⛵🌊  </p>
                </div>
            </div>
        </>
    )
}