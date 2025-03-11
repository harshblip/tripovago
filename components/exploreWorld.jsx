import { Lexend } from "next/font/google"

const lexend = Lexend({
    weight: ['200', '300', '400', '500'],
    subsets: ['latin']
})

export default function ExploreWorld({ setClick }) {
    return (
        <>
            <div className={`${lexend.className} flex flex-col md:flex-row gap-6 p-4 md:p-10`}>
                <div
                    className="h-[16rem] w-full md:w-3/5 p-6 rounded-xl one hover:cursor-pointer hover:scale-[1.02] transition-all"
                    onClick={() => setClick(true)}
                >
                    <div className="flex flex-col justify-around p-2 text-white">
                        <p className="text-[0.6rem] font-normal"> thailand / vietnam / bali / singapore / malaysia </p>
                        <p className="text-sm font-normal"> Explore South East Asia </p>
                    </div>
                </div>

                <div
                    className="h-[16rem] w-full md:w-2/5 p-6 rounded-xl two hover:cursor-pointer hover:scale-[1.02] transition-all"
                    onClick={() => setClick(true)}
                >
                    <div className="flex flex-col justify-around p-2 text-white">
                        <p className="text-[0.6rem] font-normal"> Azerbaijan / Kazakhstan / Russia / Georgia / Turkey / Uzbekistan
                        </p>
                        <p className="text-sm font-normal"> Explore Europe </p>
                    </div>
                </div>
            </div>
            <div className={`${lexend.className} -mt-12 flex flex-col md:flex-row gap-6 p-4 md:p-10`}>
                <div
                    className="h-[16rem] w-full md:w-2/5 p-6 rounded-xl three hover:cursor-pointer hover:scale-[1.02] transition-all"
                    onClick={() => setClick(true)}
                >
                    <div className="flex flex-col justify-around p-2 text-white">
                        <p className="text-[0.6rem] font-normal"> Dubai / Saudi Arabia / Qatar
                        </p>
                        <p className="text-sm font-normal"> Explore Middle East </p>
                    </div>
                </div>

                <div
                    className="h-[16rem] w-full md:w-3/5 p-6 rounded-xl four hover:cursor-pointer hover:scale-[1.02] transition-all"
                    onClick={() => setClick(true)}
                >
                    <div className="flex flex-col justify-around p-2 text-white">
                        <p className="text-[0.6rem] font-normal"> Jammu&Kashmir / Rajasthan / Goa / Kerala </p>
                        <p className="text-sm font-normal"> Explore India </p>
                    </div>
                </div>
            </div>
        </>
    )
}