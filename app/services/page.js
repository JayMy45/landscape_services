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
            <section className="h-full border bg-gray-400 p-10">

                <div className="">
                    <div className="grid grid-cols-4 gap-10 w-fit mx-auto">
                        {
                            serviceData.map(({ id, name, description, image }) => {
                                return <figure className="flex flex-col w-fit h-fit rounded-sm overflow-hidden bg-green-600 bg-opacity-60 shadow-xl mx-auto pr-5" key={`service--${id}`}>
                                    <div className="w-56 h-fit">
                                        <Image
                                            src={`${image}`}
                                            className="ml-3"
                                            alt="picture of service"
                                            height={75}
                                            width={75}
                                        />
                                        <div className="ml-5 mt-1 mb-1 h-5">
                                            <h2 className="text-left text-xs font-bold uppercase text-slate-200">{name}</h2>
                                        </div>
                                        <div className="ml-7 text-sm text-slate-900 h-36">
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