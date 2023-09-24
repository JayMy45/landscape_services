import Image from "next/image"
import HoustonBrand from "../houston"
import TickerComponent from "./ticker"

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
                <div className="footer flex h-48">
                    <div className="w-2/6 flex justify-center items-center">
                        <Image className="hidden md:block" src="/jlsLOGO.1.png" alt="Business Logo" width={150} height={150} />
                        <Image className="block md:hidden" src="/jlsLOGO.png" alt="Business Logo with initial" width={50} height={50} />
                    </div>
                    <div className="w-1/6 border">

                    </div>
                    <div className="w-3/6 border">

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