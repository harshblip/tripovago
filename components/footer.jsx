import { Kavoon, Lexend } from "next/font/google"

const kavoon = Kavoon({
    weight: ['400'],
    subsets: ['latin']
})

const lexend = Lexend({
    weight: ['200', '300', '500'],
    subsets: ['latin']
})

export default function Footer() {
    return (
        <>
            <div
                className="flex flex-col"
                id="about"
            >
                <div className={`bg-[#34818D] w-[24rem] sm:w-full h-[16rem] mt-24 text-white rounded-lg flex justify-between ${lexend.className}`}>
                    <div className="flex flex-col p-8">
                        <div className={`${kavoon.className} flex space-x-2`}>
                            <p className="text-lg sm:text-3xl"> Trip </p>
                            <img src='./icons/globe-white.png' className="w-7 sm:w-8" />
                            <p className="text-lg sm:text-3xl"> vita </p>
                        </div>
                        <p className="sm:flex hidden font-light sm:font-normal text-[0.7rem] sm:text-sm mt-4"> Helping You Discover New Destinations and Create <br /> Unforgettable Memories </p>
                        <p className="flex sm:hidden font-light sm:font-normal text-[0.7rem] sm:text-sm mt-4"> Helping You Discover New <br /> Destinations and Create <br /> Unforgettable Memories </p>
                        <p className="font-extralight text-[0.7rem] sm:text-sm mt-4">  tripovita@gmail.com  </p>
                        <p className="text-[0.6rem] sm:text-sm font-extralight mt-1"> +91 8860922191 / +91 7982769510 </p>
                    </div>
                    <div className="flex space-x-4 sm:space-x-24 p-8">
                        <div className="sm:flex hidden flex-col text-[0.8rem] sm:text-sm space-y-4 items-start">
                            <button>
                                Home
                            </button>
                            <button>
                                About
                            </button>
                            <button>
                                Terms and Conditions
                            </button>
                            <button>
                                Contact
                            </button>
                        </div>
                        <div className="sm:flex hidden flex-col text-[0.8rem] sm:text-sm space-y-4 items-start">
                            <button>
                                Destinations
                            </button>
                            <button>
                                Tour Packages
                            </button>
                            <button>
                                Reviews
                            </button>
                            <button>
                                Others
                            </button>
                        </div>
                        <div className="flex flex-col">

                        </div>
                    </div>
                </div>
                <div className="flex justify-between">
                    <p className="text-xs font-light sm:flex ml-4 sm:ml-6 -mt-8 text-white"> Tripovita Inc Copyright 2024 </p>
                    <div className="flex space-x-6 sm:mr-16 mr-6 -mt-12 absolute right-0">
                        <img src="./icons/Gmail.png" className="w-6  " />
                        <img src="./icons/Instagram.png" className="w-6 " />
                        <img src="./icons/TwitterX.png" className="w-6  " />
                    </div>
                </div>
            </div>
        </>
    )
}