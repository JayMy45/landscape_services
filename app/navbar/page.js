import Link from "next/link";
import Hamburger from "../hamburger";
import Image from "next/image";

export default function Navbar() {

    return (
        <>
            <nav className="relative z-10 sticky top-0 hidden md:block bg-stone-400 dark:bg-stone-700 bg-opacity-95 dark:bg-opacity-95 py-2 shadow-md">
                <div className="navbar flex h-24">
                    <div className="w-1/3 flex justify-center">
                        <ul className="flex justify-around items-center space-x-4">
                            <Link href="/">
                                <li className="hover:border-b border-blue-50 p-1 text-blue-50">Home</li>
                            </Link>
                            <Link href="#about">
                                <li className="hover:border-b border-blue-50 p-1 text-blue-50">About Us</li>
                            </Link>
                            <Link href="#area">
                                <li className="hover:border-b border-blue-50 p-1 text-blue-50">Areas</li>
                            </Link>
                        </ul>
                    </div>

                    <div className="w-1/3 flex justify-center items-center">
                        <Image src="/jlsLOGO1.png" alt="Business Logo" width={150} height={150} />
                    </div>

                    <div className="w-1/3 flex justify-center">
                        <ul className="flex justify-around items-center space-x-4">
                            <Link href="#services">
                                <li className="hover:border-b border-blue-50 p-1 text-blue-50">Services</li>
                            </Link>
                            <Link href="#contact">
                                <li className="hover:border-b border-blue-50 p-1 text-blue-50">Contact Us</li>
                            </Link>
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