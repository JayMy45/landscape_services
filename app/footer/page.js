import TickerComponent from "./ticker"

export default function Footer() {

    return (
        <>
            <footer>
                <div className="h-10 w-full">
                    <div className="bg-black">
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
            </footer>
        </>
    )
}