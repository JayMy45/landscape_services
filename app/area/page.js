import { ServiceArea } from "../data/ServiceArea";

export default function AreaPage() {
    return (
        <>
            <section className="h-full pb-5" id="service_area">
                <div className="h-2/3 md:rounded-b-xl bg-slate-200" style={{
                    backgroundImage:
                        "linear-gradient(rgba(3,1,0.2,0.2),rgba(3,1,0.2,0.2)), url('/SouthCarolina.png')",
                    backgroundSize: "200px, 200px",
                    backgroundPosition: "center",
                }}>
                    <div>
                        <h2 className="text-center text-4xl text-black font-bold bg-slate-400 bg-opacity-95 p-4">Service Area</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 p-5 md:p-10">
                        {
                            ServiceArea.map((area) => {
                                return (
                                    <div key={area.id} className="text-xl md:text-2xl">

                                        <div className="bg-slate-100 dark:bg-slate-300 bg-opacity-95 dark:opacity-95 w-38 md:w-44 mx-auto text-center text-sm p-6 rounded-md mt-2">
                                            <h2 className="text-amber-800 font-bold uppercase">{area.location}</h2>
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