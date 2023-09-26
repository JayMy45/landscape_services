import Image from "next/image"
import HoustonBrand from "../houston"
import TickerComponent from "./ticker"
import Link from "next/link"

export default function Footer() {

    return (
        <>
            {/* ticker div */}
            <div className="h-10 w-full">
                <div className="bg-transparent dark:bg-black">
                    <TickerComponent />
                </div>
            </div>
            <footer className=" bg-stone-400 dark:bg-stone-700 bg-opacity-95 dark:bg-opacity-95 pt-2 shadow-md">

                <div className="footer flex h-48 px-5 mx-auto">

                    <div className="w-3/12 md:w-3/12 lg:w-2/12 flex justify-center items-center">
                        <Image className="hidden md:block" src="/jlsLOGO.1.png" alt="Business Logo" width={150} height={150} />
                        <Image className="block md:hidden px-1 mx-auto" src="/jlsLOGO.png" alt="Business Logo with initial" width={75} height={75} />
                    </div>

                    <div className="hidden md:block text-center md:w-6/12 lg:w-8/12">
                        <div className="py-4">
                            <ul className="inline-flex justify-between items-center py-16">
                                <Link href="/">
                                    <li className="hover:border-b border-blue-50 p-1 text-blue-50 md:mr-5 lg:mr-12">Home</li>
                                </Link>
                                <Link href="#about">
                                    <li className="hidden md:block hover:border-b border-blue-50 p-1 text-blue-50 md:mr-5 lg:mr-12">About</li>
                                    <li className="block md:hidden hover:border-b border-blue-50 p-1 text-blue-50 md:mr-5 lg:mr-12">About Us</li>
                                </Link>
                                <Link href="#area">
                                    <li className="hover:border-b border-blue-50 p-1 text-blue-50 md:mr-5 lg:mr-12">Areas</li>
                                </Link>
                                <Link href="#services">
                                    <li className="hover:border-b border-blue-50 p-1 text-blue-50 md:mr-5 lg:mr-12">Services</li>
                                </Link>
                                <Link href="#contact">
                                    <li className="hidden md:block hover:border-b border-blue-50 p-1 text-blue-50 md:mr-5 lg:mr-12">Contact</li>
                                    <li className="block md:hidden hover:border-b border-blue-50 p-1 text-blue-50 md:mr-5 lg:mr-12">Contact Us</li>
                                </Link>
                            </ul>
                        </div>
                    </div>

                    <div className="w-9/12 md:w-3/12 lg:w-3/12 text-left">
                        <ul className="flex flex-col items-center h-full py-16">

                            <li className="text-sm md:text-xs xl:text-sm border-blue-50 md:p-1 text-blue-50">Phone: 803-563-0416</li>
                            <li className="text-sm md:text-xs xl:text-sm border-blue-50 md:p-1 text-blue-50">Email:<span> </span>
                                <Link href="#contact" className="hover:border-b">
                                    jonesservice85@gmail.com
                                </Link>
                            </li>
                        </ul>
                    </div>

                </div>
                <div className="flex flex-row justify-center md:justify-end py-2 md:py-0">
                    <div className="md:flex md:justify-center md:items-center md:p-0">
                        <a href="http://www.jeremynmyers.com">
                            <h4 className="text-xxs text-zinc-6000 dark:text-zinc-50 px-2">&copy; 2023 JayMyDesign<span className="text-yellow-500">*</span></h4>
                        </a>
                    </div>
                    <HoustonBrand />
                </div>
            </footer>
        </>
    )
}