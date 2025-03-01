import { Lexend } from "next/font/google"
import data from '../../data.json'

const lexend = Lexend({
    weight: ['200', '300', '400', '500'],
    subsets: ['latin']
})

export default function touristPackages() {
    return (
        <>
            <div className={`${lexend.className} mt-24`}>
                <div className="flex">
                    <div className="flex flex-col space-y-4 ml-20">
                        <p className="text-md text-[#BDBDBD]"> Tour packages </p>
                        <p className="text-4xl text-[#34818D] font-medium"> Our Tourist Packages </p>
                    </div>
                </div>
                <div className="flex">
                    <div className={`${lexend.className} w-full max-w-screen-xl mx-auto p-4 mt-4`}>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {
                                data.map((x, i) => {
                                    return (
                                        x.type === "tourist packages" ? <div
                                            className="bg-[#ffffff] h-[24rem] rounded-[1.5rem] shadow-lg flex flex-col bg-[length:180%] bg-no-repeat  bg-center hover:cursor-pointer hover:scale-105 transition-all"
                                            key={i}
                                            style={{ backgroundImage: `url(${x.bg})`, backgroundSize: "250%" }}
                                        >
                                            <div className="p-2 absolute rounded-md text-xs bg-[#e5e5e56b] text-white ml-[13rem] mt-4">
                                                <p className="text-xs flex items-center"> <span> <img src = "./icons/star.png" className="w-4 mr-1"/> </span> {x.rating} </p>
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
            </div>
        </>
    )
}