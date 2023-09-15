import HoustonBrand from "../houston"
import TickerComponent from "./ticker"

export default function Footer() {

    return (
        <>
            <footer>
                {/* ticker div */}
                <div className="h-10 w-full">
                    <div className="bg-transparent dark:bg-black">
                        <TickerComponent />
                    </div>
                </div>
                <div className="footer flex h-48 border">
                    <div className="w-1/6 border">

                    </div>
                    <div className="w-2/6 border">

                    </div>
                    <div className="w-3/6 border">

                    </div>
                </div>
                <div className="flex flex-row justify-center md:justify-end py-2 md:py-0">
                    <div className="flex items-center pb-3 md:p-0">
                        <a href="http://www.jeremynmyers.com">
                            <h4 className="text-xxs bg-cyan-950 md:bg-transparent rounded-xl text-zinc-300 md:text-zinc-800 px-2">&copy; 2023 JayMyDesign<span className="text-yellow-500">*</span></h4>
                        </a>
                    </div>
                    <HoustonBrand />
                </div>
            </footer>
        </>
    )
}