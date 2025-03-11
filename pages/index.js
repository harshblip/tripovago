import Image from "next/image";
import { CarouselPlugin } from "../components/carousel";
import Navbar from "../components/navbar";
import { Lexend } from "next/font/google";
import Howitworks from "../components/howitworks";
import TouristPackages from "../components/touristPackages";
import Footer from "../components/footer";
import Modal from "../components/modal";
import { useState } from "react";
import ExploreWorld from "../components/exploreWorld";
import Comments from "../components/comments";
import Home from "./homepage";

const lexend = Lexend({
    weight: ['200', '300', '400', '500'],
    subsets: ['latin']
})

export default function Index() {
    const [click, setClick] = useState(false);

    return (
        <>
            <Home />
        </>
    );
}

