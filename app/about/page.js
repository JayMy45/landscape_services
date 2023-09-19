import Link from "next/link";

export default function About() {

    return (
        <>
            <section className="h-full p-2 md:pt-28 md:pb-5 md:p-10" id="about">
                <div className="w-full border-b border-stone-700 dark:border-slate-100 mb-10 p-2">
                    <h2 className="uppercase font-bold text-stone-700 dark:text-slate-100 text-2xl">About Us</h2>
                </div>
                <div className="shadow-lg pb-10 px-5 md:py-10 md:px-28 rounded-xl ">
                    <p className="hidden lg:block text-justify">
                        <strong>Jones Landscaping Services</strong> established in 2018 by TyKeith Jones with a vision to turn outdoor spaces into flourishing and vibrant landscapes. <em>Our mission</em> is to craft visually pleasing environments that serve as tranquil sanctuaries. Whether it involves designing stunning landscapes or delivering meticulous maintenance, each project, regardless of size, represents an opportunity for us to craft a work of art. What truly distinguishes us is our steadfast dedication to providing personalized and attentive services. Our objective is to elevate the aesthetic charm of your property through our landscaping and maintenance offerings. If you require assistance with property maintenance or landscaping updates, please don't hesitate to <a href="#contact" className="text-blue-600">reach out</a> to us. We're here to help you bring your project's potential to life.
                    </p>
                    <p className="block lg:hidden text-justify">
                        <strong>Jones Landscaping Services</strong> established in 2018 by TyKeith Jones with a vision to turn outdoor spaces into flourishing and vibrant landscapes. <em>Our mission</em> is to craft visually pleasing environments that serve as tranquil sanctuaries. If you require assistance with property maintenance or landscaping updates, please don't hesitate to <a href="#contact" className="text-blue-600">reach out</a> to us. We're here to help you bring your project's potential to life.
                    </p>
                </div>
            </section>
        </>
    )


}