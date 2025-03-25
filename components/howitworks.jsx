import { Lexend } from "next/font/google"
import data from '../src/data.json'

const lexend = Lexend({
    weight: ['200', '300', '500'],
    subsets: ['latin']
})

export default function Howitworks({ setClick }) {
    return (
        <>
            <div className={`${lexend.className} flex sm:flex-row flex-col mt-[4rem] sm:-ml-10`}>
                <div className="sm:w-1/2">
                    <img src='./images/onadate.webp' className="rounded-xl w-[32rem] h-[18rem] sm:h-[28rem] sm:w-[44rem]" />
                </div>
                <div className="sm:mt-0 mt-12 sm:ml-0 ml-2 sm:w-1/2">
                    <div>
                        <p className="sm:ml-0 ml-4 text-md text-[#BDBDBD]"> How it works </p>
                        <p className="sm:ml-0 ml-4 text-4xl text-[#34818D] font-medium"> One click for you </p>
                    </div>
                    <div className="mt-6 space-y-1">
                        {
                            data.map((x, i) => {
                                return (
                                    x.type === "howto" ?
                                        <button 
                                        className="text-start hover:shadow-md transition-all hover:cursor-pointer p-5 rounded-xl flex space-x-16 ml-1 sm:mr-12" 
                                        key={i}
                                        onClick={() => setClick(true)}
                                        >
                                            <img src={x.icon} className="w-12 p-[0.8rem] rounded-xl bg-[#d2d2d261] absolute" />
                                            <div className="flex flex-col -mt-1">
                                                <p className="text-[#5C5C5C] text-medium"> {x.title}</p>
                                                <p className="text-[#C2C2C2] text-xs">{x.subtitle}</p>
                                            </div>
                                        </button> : ''
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}