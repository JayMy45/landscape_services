export default function Navbar() {

    return (
        <>
            <nav>
                <div className="navbar flex h-32 border">

                    <div className="w-1/3 border flex justify-center">
                        <ul className="flex justify-around items-center space-x-4">
                            <li className="hover:border-b p-1">Home</li>
                            <li className="hover:border-b p-1">Contact Us</li>
                            <li className="hover:border-b p-1">Services</li>
                        </ul>
                    </div>

                    <div className="w-1/3 border">
                    </div>

                    <div className="w-1/3 border flex justify-center">
                        <ul className="flex justify-around items-center space-x-4">
                            <li className="hover:border-b p-1">About Us</li>
                            <li className="hover:border-b p-1">Elephant Ears</li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}