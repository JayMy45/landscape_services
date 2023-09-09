import Image from "next/image"

export default function Services() {
    // Mowing
    // Trimming
    // Aeration
    // Seed sowing
    // Light tree pruning
    // Mulch/material installation
    // Plant/Tree installation
    // Clean-up
    // Old landscape tear out
    // Bed install
    // Hedge management
    // Fertilization

    return (
        <>
            <section className="h-screen border">
                <div className="border m-10">
                    <h2 className="text-center">Services Provided</h2>
                </div>
                <div className="grid grid-col-4 gap-4">
                    <figure className="flex flex-col w-56 h-32 border">
                        <Image src='https://res.cloudinary.com/dp04hh5pz/image/upload/v1694227883/landscape_service/lawnmower_kgfm1i.png' alt="picture of service" height={35} width={35} />

                        <div className="">
                            <div>
                                thickens
                            </div>
                        </div>
                    </figure>
                </div >
            </section >
        </>
    )
}