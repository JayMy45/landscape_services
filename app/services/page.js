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
            <section className="h-full border bg-gray-400 p-10">

                <div className="">
                    <div className="grid grid-cols-4 gap-10">
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

                    </div >
                </div>
            </section >
        </>
    )
}