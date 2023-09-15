import Image from "next/image"
import { serviceData } from "../data/serviceData"


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
            <section className="h-full p-10">
                <div className="">
                    <div className="w-full border-b border-black dark:border-slate-100 mb-10 p-2">
                        <h2 className="uppercase font-bold text-2xl">Services</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-5 w-fit mx-auto">
                        {
                            serviceData.map(({ id, name, description, image }) => {
                                return <figure className="flex flex-col w-fit h-fit rounded-md overflow-hidden bg-green-600 bg-opacity-60 shadow-xl mx-auto pr-5 pb-5 md:pb-0" key={`service--${id}`}>
                                    <div className="w-44 md:w-56 h-36 md:h-fit">
                                        <Image
                                            src={`${image}`}
                                            className="ml-3 mt-2"
                                            alt="picture of service"
                                            height={75}
                                            width={75}
                                        />
                                        <div className="ml-5 mt-1 mb-1 h-5">
                                            <h2 className="text-left text-lg md:text-xs font-bold uppercase text-slate-100">{name}</h2>
                                        </div>
                                        <div className="hidden md:block ml-7 text-sm text-slate-950 h-36">
                                            <p>{description}</p>
                                        </div>
                                    </div>
                                </figure>
                            })
                        }

                    </div >
                </div>
            </section >

        </>
    )
}