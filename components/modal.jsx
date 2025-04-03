import { Kavoon, Lexend } from "next/font/google"

const kavoon = Kavoon({
    weight: ['400'],
    subsets: ['latin']
})

const lexend = Lexend({
    weight: ['200', '300', '500'],
    subsets: ['latin']
})

export default function Modal({ setClick }) {
    const phone = "+91-7982769510";
    const whatsappNumber = "+918860922191"
    const whatsappMessage = "Hi, I loved your website. Can I know more?"

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const url = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    const intentUrl = `intent://send/?phone=${whatsappNumber}&text=${encodedMessage}&type=text/plain#Intent;scheme=whatsapp;package=com.whatsapp;end;`;

    function openWhatsApp() {
        if (/Android/i.test(navigator.userAgent)) {
            window.location.href = intentUrl; // Works better for Android
        } else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
            window.open(url, "_blank"); // Works for iOS
        } else {
            // For desktop, try whatsapp:// protocol first
            window.open(`whatsapp://send?phone=${whatsappNumber}&text=${encodedMessage}`, "_blank");
            setTimeout(() => {
                window.open(url, "_blank"); // Fallback to web if WhatsApp is not installed
            }, 1000);
        }
    }

    return (
        <>
            <div
                className="flex flex-col h-[34rem] sm:h-[30rem] w-[30rem] modal-bg modal rounded-lg sm:ml-0 sm:mr-0 ml-2 mr-2"
            >
                <button
                    className="absolute flex justify-end items-end w-full p-5"
                    onClick={() => setClick(false)}
                > ❌ </button>
                <div className="p-6">
                    <p className={`mt-6 leading-10 text-4xl text-[#61527dd0] ${kavoon.className}`}>Let's plan your perfect trip together !</p>
                    <p className={`mt-6 ${lexend.className} text-xs font-semibold text-[#61527dd0]`}> At Tripovita, we believe every journey should be seamless and stress-free. That’s why we connect you directly with our travel experts—so you have zero doubts and complete clarity before choosing your perfect package. </p>
                    <p className={`mt-6 ${lexend.className} text-md font-semibold text-[#61527dd0]`}>📞 Call Us to speak directly with a travel expert.</p>
                    <p className={`mt-2 ${lexend.className} text-md font-semibold text-[#61527dd0]`}>💬 Chat on WhatsApp for quick inquiries.</p>
                    <div className="flex space-x-4">
                        <a onClick={() => window.location.href = `tel:${phone}`} className="flex p-4 border flex-col bg-transparent shadow-lg rounded-lg">
                            <p className={`${lexend.className} text-[0.6rem] font-semibold text-[#61527dd0]`}> PHONE </p>
                            <p className={`mt-1 ${lexend.className} text-sm font-semibold text-[#61527dd0]`}> 📞 +91-8860922191 </p>
                        </a>
                        <button
                            className="text-start flex p-4 border flex-col bg-transparent shadow-lg rounded-lg"
                            onClick={openWhatsApp}
                        >
                            <p className={`${lexend.className} text-[0.6rem] font-semibold text-[#61527dd0]`}> WHATSAPP </p>
                            <p className={`mt-1 items-center flex justify-center ${lexend.className} text-sm font-semibold text-[#61527dd0]`}> <span> <img src="./icons/WhatsApp.png" className="w-6" /> </span> +91-8860922191 </p>
                        </button>
                    </div>
                    <p className={`mt-6 ${lexend.className} text-md font-semibold text-[#61527dd0]`}>Your dream destination is just a conversation away! 🌍✨</p>
                </div>
            </div>
        </>
    )
}