'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineFacebook, AiOutlineInstagram, AiOutlineMenu, AiOutlineTwitter } from "react-icons/ai";


export default function Hamburger() {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const handleToggle = () => {
        setNavbarOpen(!navbarOpen);
    }

    useEffect(() => {
        console.log('NavBar rendered');
    }, []);

    useEffect(() => {
        console.log('NavBar rendered');
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 739 && navbarOpen) {
                setNavbarOpen(false);
            }
        };

        // Attach the event listener
        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [navbarOpen]);

    return (
        <>
            <div className="flex items-center cursor-pointer md:hidden mx-auto my-5 mr-5">
                <AiOutlineMenu
                    onClick={handleToggle}
                    size={30}
                    className="text-slate-700 dark:text-slate-200"
                />
            </div>
            <div className={navbarOpen
                ? "fixed z-50 left-0 top-0 w-[75%] h-screen bg-slate-800 p-7 ease-in duration-500"
                : "fixed z-50 left-[-100%]  w-[75%] h-screen top-0 p-10 ease-in duration-500"
            }
            >
                <div className="flex w-full items-center justify-end">
                    <div onClick={handleToggle} className="cursor-pointer text-slate-200">
                        <AiOutlineClose
                            size={30}
                        />
                    </div>
                </div>
                <div className="flex flex-col py-4">
                    <ul>
                        <Link href="/">
                            <li
                                onClick={() => setNavbarOpen(false)}
                                className="py-4 cursor-pointer text-slate-200">
                                Home
                            </li>
                        </Link>
                        <Link href="/">
                            <li
                                onClick={() => setNavbarOpen(false)}
                                className="py-4 cursor-pointer text-slate-200">
                                About
                            </li>
                        </Link>
                        <Link href="/">
                            <li
                                onClick={() => setNavbarOpen(false)}
                                className="py-4 cursor-pointer text-slate-200">
                                Work
                            </li>
                        </Link>
                        <Link href="services">
                            <li
                                onClick={() => setNavbarOpen(false)}
                                className="py-4 cursor-pointer text-slate-200">
                                Services
                            </li>
                        </Link>
                        <Link href="area">
                            <li
                                onClick={() => setNavbarOpen(false)}
                                className="py-4 cursor-pointer text-slate-200">
                                Areas
                            </li>
                        </Link>
                        <Link href="contact">
                            <li
                                onClick={() => setNavbarOpen(false)
                                }
                                className="py-4 cursor-pointer text-slate-200">
                                Contact Us
                            </li>
                        </Link>
                    </ul>
                </div>
                <div>
                    <div className="flex flex-row justify-around pt-10 items-center">

                        <AiOutlineInstagram
                            size={30}
                            className="cursor-pointer text-slate-200"
                            onClick={() => setNavbarOpen(false)
                            }
                        />
                        <AiOutlineFacebook
                            size={30}
                            className="cursor-pointer text-slate-200"
                            onClick={() => setNavbarOpen(false)
                            }
                        />
                        <AiOutlineTwitter
                            size={30}
                            className="cursor-pointer text-slate-200"
                            onClick={() => setNavbarOpen(false)
                            }
                        />

                    </div>
                </div>
            </div>
        </>
    )
}