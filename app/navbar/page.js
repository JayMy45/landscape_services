'use client'

import { useRouter } from "next/navigation";
import Hamburger from "../hamburger";
import Image from "next/image";
import TickerComponent from "../ticker/ticker";

export default function Navbar() {

    const router = useRouter();

    const isActive = (path) => {
        return router.pathname === path;
    };

    const sectionScroll = (sectionId) => {
        return document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    }

    const scrollToSection = (sectionId) => {
        if (sectionId === 'home-section') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            sectionScroll(sectionId);
        }
    };

    return (
        <>
            {/* ticker div */}
            <div className="h-auto w-full">
                <div className="bg-transparent dark:bg-black">
                    <TickerComponent />
                </div>
            </div>
            <nav className="relative z-10 sticky top-0 hidden md:block bg-stone-400 dark:bg-stone-700 bg-opacity-95 dark:bg-opacity-95 py-2 shadow-md">
                <div className="navbar flex h-[6.25rem]">
                    <div className="w-1/3 flex justify-center">
                        <ul className="flex justify-around items-center space-x-5">
                            <li onClick={() => scrollToSection('home-section')} className="cursor-pointer hover:border-b border-blue-50 p-1 text-blue-50">Home</li>
                            <li onClick={() => scrollToSection('about')} className="cursor-pointer hover:border-b border-blue-50 p-1 text-blue-50">About Us</li>
                            <li onClick={() => scrollToSection('area')} className="cursor-pointer hover:border-b border-blue-50 p-1 text-blue-50">Areas</li>
                        </ul>
                    </div>

                    <div className="w-1/3 flex justify-center items-center">
                        <Image src="/jlsLOGO.1.png" alt="Business Logo" width={100} height={100} />
                    </div>

                    <div className="w-1/3 flex justify-center">
                        <ul className="flex justify-around items-center space-x-4">
                            <li onClick={() => scrollToSection('services')} className="cursor-pointer hover:border-b border-blue-50 p-1 text-blue-50">Services</li>
                            <li onClick={() => scrollToSection('contact')} className="cursor-pointer hover:border-b border-blue-50 p-1 text-blue-50">Contact Us</li>
                            {/* <li className="hover:border-b border-blue-50 p-1 text-blue-50">Elephant Ears</li> */}
                        </ul>
                    </div>
                </div>
            </nav>
            <nav className="flex relative z-10 sticky top-0 bg-stone-400 dark:bg-stone-700 bg-opacity-95 dark:bg-opacity-95 shadow-sm">
                <Hamburger />
            </nav>

        </>
    )
}