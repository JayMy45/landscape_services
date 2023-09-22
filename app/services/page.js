import Image from "next/image"
import { serviceData } from "../data/serviceData"
import Head from "next/head";

// SEO Metadata
export const metadata = {
    title: 'Our Services',
    description: 'A list of services we provide including mowing, trimming, aeration, and more.',
    openGraph: {
        title: 'Our Landscaping Services',
        description: 'A list of premium landscaping services we provide.',
        images: ['/RidingLawnmower.png', '']
    },
};

// JSON-LD structured data
const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'itemListElement': serviceData.map((service, index) => ({
        '@type': 'ListItem',
        'position': index + 1,
        'url': `/services#${service.id}`,
        'name': service.name,
        'description': service.description,
        'image': service.image
    }))
};


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
            {/* Insert the JSON-LD structured data into the head of your document */}
            <Head>
                <script type="application/ld+json">
                    {JSON.stringify(jsonLd)}
                </script>
            </Head>

            <section id="services" className="h-full p-2 pt-16 md:pb-5 md:px-10 md:pt-28">
                <div className="">
                    <div className="w-full border-b border-stone-700 dark:border-slate-100 md:mb-10 p-2">
                        <h2 className="uppercase font-bold text-stone-700 dark:text-slate-100 text-2xl">Services</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-2 md:gap-5 w-fit mx-auto pt-5">
                        {
                            serviceData.map(({ id, name, description, image }) => {
                                return <figure className="flex flex-col w-fit h-fit rounded-md overflow-hidden bg-green-600 dark:bg-green-700 bg-opacity-60 shadow-xl mx-auto pr-2 md:pr-5 md:pb-5" key={`service--${id}`}>
                                    <div className="w-44 md:w-56 h-36 md:h-fit">
                                        <Image
                                            src={`${image}`}
                                            className="ml-3 mt-2"
                                            alt={`picture of ${name} service`}
                                            height={75}
                                            width={75}
                                        />
                                        <div className="ml-5 mt-1 mb-1 h-5">
                                            <h2 className="text-left text-sm md:text-xs font-bold uppercase text-slate-100">{name}</h2>
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