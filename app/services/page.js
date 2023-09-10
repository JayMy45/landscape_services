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
            <section className="h-screen border bg-gray-400">
                <div className="border m-10">
                    <h2 className="text-center">Services Provided</h2>
                </div>
                <div className="m-10">
                    <div className="grid grid-cols-4 gap-4">
                        <figure className="flex flex-col w-fit h-fit rounded-sm overflow-hidden bg-green-600 bg-opacity-60 shadow-xl mx-auto pr-5">
                            <div className="w-56 h-56  ">
                                <Image
                                    src='/RidingLawnmower.png'
                                    className="ml-3"
                                    alt="picture of service"
                                    height={75}
                                    width={75}
                                />
                                <div className="ml-5">
                                    <h2 className="text-left uppercase text-slate-200">Mowing</h2>
                                </div>
                                <div className="ml-7 text-sm text-slate-900">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </figure>
                        <figure className="flex flex-col w-fit h-fit rounded-sm overflow-hidden bg-green-600 bg-opacity-60 shadow-xl mx-auto pr-5">
                            <div className="w-56 h-56  ">
                                <Image
                                    src='/WeedEater.icon.png'
                                    className="ml-3"
                                    alt="picture of service"
                                    height={75}
                                    width={75}
                                />
                                <div className="ml-5">
                                    <h2 className="text-left uppercase text-slate-200">Trimming</h2>
                                </div>
                                <div className="ml-7 text-sm text-slate-900">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </figure>
                        <figure className="flex flex-col w-fit h-fit rounded-sm overflow-hidden bg-green-600 bg-opacity-60 shadow-xl mx-auto pr-5">
                            <div className="w-56 h-56  ">
                                <Image
                                    src='/aerator.icon.png'
                                    className="ml-3"
                                    alt="picture of service"
                                    height={75}
                                    width={75}
                                />
                                <div className="ml-5">
                                    <h2 className="text-left uppercase text-slate-200">Aeration</h2>
                                </div>
                                <div className="ml-7 text-sm text-slate-900">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </figure>
                        <figure className="flex flex-col w-fit h-fit rounded-sm overflow-hidden bg-green-600 bg-opacity-60 shadow-xl mx-auto pr-5">
                            <div className="w-56 h-56  ">
                                <Image
                                    src='/seedSower.png'
                                    className="ml-3"
                                    alt="picture of service"
                                    height={75}
                                    width={75}
                                />
                                <div className="ml-5">
                                    <h2 className="text-left uppercase text-slate-200">Seed Sowing</h2>
                                </div>
                                <div className="ml-7 text-sm text-slate-900">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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