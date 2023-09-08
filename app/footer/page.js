import TickerComponent from "./ticker"

export default function Footer() {

    return (
        <>
            <footer>
                <div className="h-20 w-full border">
                    <TickerComponent />
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