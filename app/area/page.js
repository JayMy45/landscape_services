import { ServiceArea } from "../data/ServiceArea";

export default function AreaPage() {
    return (
        <>
            <section className="h-full" id="service_area">
                <div className="h-96 bg-slate-200" style={{
                    backgroundImage:
                        "linear-gradient(rgba(3,1,0.2,0.2),rgba(3,1,0.2,0.2)), url('/SouthCarolina.png')",
                    backgroundSize: "200px, 200px",
                    backgroundPosition: "center",
                }}>
                    <div>
                        <h2 className="text-center text-4xl text-black font-bold bg-slate-400 bg-opacity-95 p-4">Service Area</h2>
                    </div>
                    <div className="grid grid-cols-3 gap-5 p-5">
                        {
                            ServiceArea.map((area) => {
                                return (
                                    <div key={area.id} className="text-2xl">

                                        <div className="bg-slate-300 bg-opacity-95 w-44 mx-auto text-center text-sm p-6 rounded-md mt-2">
                                            <h2 className="text-black font-bold uppercase">{area.location}</h2>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </section>
        </>
    )

}