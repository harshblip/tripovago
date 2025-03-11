import { Lexend } from "next/font/google"
import data from '../src/data.json'

const lexend = Lexend({
    weight: ['200', '300', '400', '500'],
    subsets: ['latin']
})

export default function touristPackages({ setClick }) {
    return (
        <>
            <button
                className={`${lexend.className} sm:ml-0 ml-4 text-start mt-12`}
                onClick={() => setClick(true)}
            >
                <div className="flex">
                    <div className="flex flex-col space-y-4 sm:ml-12">
                        <p className="text-md text-[#BDBDBD]"> Tour packages </p>
                        <p className="text-4xl text-[#34818D] font-medium"> Our Tourist Packages </p>
                    </div>
                </div>
                <div className="flex">
                    <div className={`${lexend.className} sm:p-4 mt-10 sm:mt-4`}>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-10">
                            {
                                data.map((x, i) => {
                                    return (
                                        x.type === "tourist packages" ? <div
                                            className="bg-[#ffffff] h-[18rem] sm:h-[24rem] w-[12rem] sm:w-[16rem] rounded-[1.5rem] shadow-lg flex flex-col hover:cursor-pointer hover:scale-105 transition-all"
                                            key={i}
                                            style={{ backgroundImage: `url(${x.bg})`, backgroundSize: "250%" }}
                                        >
                                            <div className="p-2 absolute rounded-md text-xs bg-[#e5e5e56b] text-white ml-[12rem] mt-4">
                                                <p className="text-xs flex items-center "> <span> <img src="./icons/star.png" className="w-4 mr-1" /> </span> {x.rating} </p>
                                            </div>
                                            <div className="flex justify-center items-end h-full mb-4">
                                                <div className="bg-[#e5e5e56b] w-[90%] h-24 rounded-xl flex backdrop-blur-sm">
                                                    <div className="flex flex-col justify-around p-2 text-white">
                                                        <p className="text-[0.6rem] font-normal"> {x.subtitle} </p>
                                                        <p className="text-sm font-normal"> {x.title} </p>
                                                    </div>
                                                    <div className="flex flex-col text-white justify-end items-end h-full absolute right-0 p-3">
                                                        <p className="text-sm font-normal"> {x.price} <span className="text-xs"> INR </span> </p>
                                                        <p className="text-xs italic text-[#ffffffaf]"> starting at </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> : ''
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </button>
        </>
    )
}