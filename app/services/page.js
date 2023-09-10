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
                <div className="m-10">
                    <div className="grid grid-cols-4 gap-4">
                        <figure className="flex flex-col w-fit h-fit rounded-sm overflow-hidden shadow-xl mx-auto">
                            <div className="w-56 h-56 bg-green-700 bg-opacity-60">
                                {/* <Image
                                    src='https://res.cloudinary.com/dp04hh5pz/image/upload/v1694227883/landscape_service/lawnmower_kgfm1i.png'
                                    alt="picture of service"
                                    height={200}
                                    width={200}
                                /> */}
                            </div>
                            <div className="h-fit bg-slate-200">
                                <div className="p-3">
                                    <h2 className="text-center uppercase text-slate-700">Mowing</h2>
                                </div>
                            </div>
                        </figure>
                        <figure className="flex flex-col w-fit h-fit rounded-lg overflow-hidden shadow-xl mx-auto">
                            <div className="w-fit">
                                <Image
                                    src='https://res.cloudinary.com/dp04hh5pz/image/upload/v1694227883/landscape_service/lawnmower_kgfm1i.png'
                                    alt="picture of service"
                                    height={200}
                                    width={200}
                                />
                            </div>
                            <div className="h-fit bg-slate-200">
                                <div className="p-3">
                                    <h2 className="text-center uppercase text-slate-700">Mowing</h2>
                                </div>
                            </div>
                        </figure>
                    </div >
                </div>
            </section >
        </>
    )
}