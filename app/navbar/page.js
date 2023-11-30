'use client'

import Link from "next/link";
import Hamburger from "../hamburger";
import Image from "next/image";

export default function Navbar() {

    const scrollToSection = (sectionId) => {
        if (sectionId === 'home-section') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <nav className="relative z-10 sticky top-0 hidden md:block bg-stone-400 dark:bg-stone-700 bg-opacity-95 dark:bg-opacity-95 py-2 shadow-md">
                <div className="navbar flex h-[6.25rem]">
                    <div className="w-1/3 flex justify-center">
                        <ul className="flex justify-around items-center space-x-5">
                            <li onClick={() => scrollToSection('home-section')} className="hover:border-b border-blue-50 p-1 text-blue-50">Home</li>
                            <li onClick={() => scrollToSection('about')} className="hover:border-b border-blue-50 p-1 text-blue-50">About Us</li>
                            <li onClick={() => scrollToSection('area')} className="hover:border-b border-blue-50 p-1 text-blue-50">Areas</li>
                        </ul>
                    </div>

                    <div className="w-1/3 flex justify-center items-center">
                        <Image src="/jlsLOGO.1.png" alt="Business Logo" width={100} height={100} />
                    </div>

                    <div className="w-1/3 flex justify-center">
                        <ul className="flex justify-around items-center space-x-4">
                            <li onClick={() => scrollToSection('services')} className="hover:border-b border-blue-50 p-1 text-blue-50">Services</li>
                            <li onClick={() => scrollToSection('contact')} className="hover:border-b border-blue-50 p-1 text-blue-50">Contact Us</li>
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