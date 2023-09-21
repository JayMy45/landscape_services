import { ServiceArea } from "../data/ServiceArea";

export default function AreaPage() {
    return (
        <>
            <section className="h-full p-2 pt-16 md:pb-5 md:px-10 md:pt-28" id="area">
                <div className="w-full border-b border-stone-700 dark:border-slate-100 mb-10 p-2">
                    <h2 className="uppercase font-bold text-stone-700 dark:text-slate-100 text-2xl">Area of Operation</h2>
                </div>

                <div className="h-2/3 md:rounded-xl bg-transparent dark:bg-gray-100 dark:bg-opacity-10 shadow-lg lg:h-80" style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,0,0,0),rgba(255,0,0,0)), url('/SouthCarolina.png')",
                    backgroundSize: "500px",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}>

                    {/* <div className="h-2/3 md:rounded-xl bg-transparent dark:bg-slate-200 shadow-lg bg-stone-400 bg-opacity-40"> */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 p-5 md:p-10 lg:p-20 2xl:p-20">
                        {
                            ServiceArea.map((area) => {
                                return (
                                    <div key={area.id} className="text-xl md:text-2xl">

                                        <div className="bg-slate-100 dark:bg-slate-300 bg-opacity-90 dark:opacity-70 w-38 md:w-38 lg:w-44 mx-auto text-center text-sm p-6 rounded-md">
                                            <h2 className="text-amber-700 font-bold uppercase">{area.location}</h2>
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