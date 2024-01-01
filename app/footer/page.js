'use client'

import Image from "next/image"
import HoustonBrand from "../houston"
import TickerComponent from "./ticker"
import Link from "next/link"


export default function Footer() {

    const scrollToSection = (sectionId) => {
        if (sectionId === 'home-section') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
        }
    };

    const currentYear = new Date().getFullYear(); // Get the current year



    return (
        <>
            {/* ticker div */}
            <div className="h-10 w-full">
                <div className="bg-transparent dark:bg-black">
                    <TickerComponent />
                </div>
            </div>

            {/* footer div */}
            <footer className=" bg-stone-400 dark:bg-stone-700 bg-opacity-95 dark:bg-opacity-95 pt-2 shadow-md">

                <div className="footer flex flex-row h-36 md:h-44 px-5 mx-auto">

                    <div className="w-5/12 md:w-3/12 lg:w-3/12 flex justify-center items-center">
                        <Image className="hidden md:block" src="/jlsLOGO1.png" alt="Business Logo" width={250} height={250} />
                        <Image className="block md:hidden px-1 mx-auto" src="/jlsLOGO.b.png" alt="Business Logo with initial" width={75} height={75} />
                    </div>

                    <div className="w-7/12 md:w-9/12 lg:w-9/12 h-1/2 md:h-full flex flex-col md:flex-row">

                        <div className="h-fit md:h-10 text-center md:ml-10 w-12/12 md:w-8/12">
                            <div className="py-1 md:py-4 text-xs md:text-sm">
                                <ul className="inline-flex md:justify-between lg:justify-evenly items-center py-1 md:py-16 md:w-80 lg:w-full">
                                    <li onClick={() => scrollToSection('home-section')} className="cursor-pointer hover:border-b border-blue-50 p-1 dark:text-blue-400 text-blue-700 md:text-blue-50">Home</li>
                                    <li onClick={() => scrollToSection('about')} className="cursor-pointer block lg:hidden hover:border-b border-blue-50 p-1 dark:text-blue-400 text-blue-700 md:text-blue-50">About</li>
                                    <li onClick={() => scrollToSection('about')} className="cursor-pointer hidden lg:block hover:border-b border-blue-50 p-1 dark:text-blue-400 text-blue-700 md:text-blue-50">About Us</li>
                                    <li onClick={() => scrollToSection('area')} className="cursor-pointer hover:border-b border-blue-50 p-1 dark:text-blue-400 text-blue-700 md:text-blue-50">Areas</li>
                                    <li onClick={() => scrollToSection('services')} className="cursor-pointer hover:border-b border-blue-50 p-1 dark:text-blue-400 text-blue-700 md:text-blue-50">Services</li>
                                    <div className="hidden md:block">
                                        <li onClick={() => scrollToSection('contact')} className="cursor-pointer block lg:hidden hover:border-b border-blue-50 p-1 dark:text-blue-400 text-blue-700 md:text-blue-50">Contact</li>
                                        <li onClick={() => scrollToSection('contact')} className="cursor-pointer hidden lg:block hover:border-b border-blue-50 p-1 dark:text-blue-400 text-blue-700 md:text-blue-50">Contact Us</li>
                                    </div>
                                </ul>
                            </div>
                        </div>

                        <div className="hidden lg:block lg:w-4/12 text-left">
                            <ul className="flex flex-col items-center h-1/2 md:h-full py-16">

                                <li className="text-sm md:text-xs xl:text-sm border-blue-50 md:p-1 text-blue-50">Phone: 803-563-0416</li>
                                <li className="text-sm md:text-xs xl:text-sm border-blue-50 md:p-1 text-blue-50">Email:<span> </span>
                                    <Link href="#contact" className="hover:border-b">
                                        jonesservice85@gmail.com
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="lg:hidden block w-12/12 md:w-4/12 lg:w-3/12 text-left md:mt-5 md:py-10">
                            <div className="flex flex-col items-center h-fit md:h-full">

                                <h2 className="block md:hidden text-md font-bold border-blue-50 md:p-1 text-blue-50 uppercase"><u>Contact</u></h2>
                                <h2 className="text-sm xl:text-sm border-blue-50 md:p-1 text-blue-50">803-563-0416</h2>
                                <h2 className="text-sm xl:text-sm border-blue-50 md:p-1 text-blue-50">
                                    <Link href="#contact" className="hover:border-b">
                                        jonesservice85@gmail.com
                                    </Link>
                                </h2>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="flex flex-row justify-center md:justify-end py-2 md:py-0">
                    <div className="md:flex md:justify-center md:items-center md:p-0">
                        <a href="http://www.jeremynmyers.com">
                            <h4 className="text-xxs text-zinc-6000 dark:text-zinc-50 px-2">&copy; {currentYear + " "} isJayMyDesign<span className="text-yellow-500">*</span></h4>
                        </a>
                    </div>
                    <HoustonBrand />
                </div>
            </footer>
        </>
    )
}