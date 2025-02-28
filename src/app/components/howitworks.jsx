import { Lexend } from "next/font/google"

const lexend = Lexend({
    weight: ['200', '300', '500'],
    subsets: ['latin']
})

export default function Howitworks() {
    return (
        <>
            <div className={`${lexend.className} flex mt-[16rem]`}>
                <div className="w-1/2">
                    <img src='./images/onadate.webp' className="border rounded-xl" />
                </div>
                <div className="w-1/2">
                    <p className="text-xs text-[#BDBDBD]"> How it works </p>
                    <p className="text-4xl text-[#34818D] font-medium"> One click for you </p>
                </div>
            </div>
        </>
    )
}