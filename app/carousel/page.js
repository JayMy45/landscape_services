'use client'

import { Paper } from "@mui/material";
import Carousel from "react-material-ui-carousel";

export default function CarouselPage() {


    return (
        <>
            <Carousel
                className=""
                animation="slide"
                indicators={false}
                timeout={1000}
                height={300}
                swipe={true}
            // next={(next, active) => console.log(`we left ${active}, and are now at ${next}`)}
            // prev={(prev, active) => console.log(`we left ${active}, and are now at ${prev}`)}
            >
                <div className="flex justify-center items-center h-full">
                    <Paper className=" border-r hidden md:block">
                        <img src="lawnPics/Residential1a.png" alt="Residential Property 1" className='bg-white' height={1000} width={1000} />
                    </Paper>
                    <Paper className="bg-white">
                        <img src="lawnPics/Residential1.png" alt="Residential Property 1a" className='bg-white' height={1000} width={1000} />
                    </Paper>
                </div>

                <div className="flex justify-center items-center h-full">
                    <Paper className="md:border-r">
                        <img src="lawnPics/Residential2.png" alt="Residential Property" className='bg-white' height={1000} width={1000} />
                    </Paper>
                    <Paper className="bg-white hidden md:block">
                        <img src="lawnPics/Residential2a.png" alt="Residential Property" className='bg-white' height={1000} width={1000} />
                    </Paper>
                </div>

                <div className="flex justify-center items-center h-full">
                    <Paper className=" border-r hidden md:block">
                        <img src="lawnPics/Residential3.png" alt="Residential Property" className='bg-white' height={1000} width={1000} />
                    </Paper>
                    <Paper className="bg-white">
                        <img src="lawnPics/Residential3a.png" alt="Residential Property" className='bg-white' height={1000} width={1000} />
                    </Paper>
                </div>

                <div className="flex justify-center items-center h-full">
                    <Paper className=" border-r hidden md:block">
                        <img src="lawnPics/resident5.png" alt="Residential Property" className='bg-white' height={1000} width={1000} />
                    </Paper>
                    <Paper className="">
                        <img src="lawnPics/resident5a.png" alt="Residential Property" className='bg-white' height={1000} width={1000} />
                    </Paper>
                </div>

                <div className="flex justify-center items-center h-full">
                    <Paper className=" border-r hidden md:block">
                        <img src="lawnPics/resident6.png" alt="Residential Property" className='bg-white' height={1000} width={1000} />
                    </Paper>
                    <Paper className="">
                        <img src="lawnPics/resident6a.png" alt="Residential Property" className='bg-white' height={1000} width={1000} />
                    </Paper>
                </div>

                <div className="flex justify-center items-center h-full">
                    <Paper className="md:border-r">
                        <img src="lawnPics/resident7.png" alt="Residential Property" className='bg-white' height={1000} width={1000} />
                    </Paper>
                    <Paper className=" hidden md:block">
                        <img src="lawnPics/resident7a.png" alt="Residential Property" className='bg-white' height={1000} width={1000} />
                    </Paper>
                </div>

                <div className="flex justify-center items-center h-full">
                    <Paper className="border-r hidden md:block">
                        <img src="lawnPics/Commercial1.png" alt="Residential Property" className='bg-white' height={1000} width={1000} />
                    </Paper>
                    <Paper className="">
                        <img src="lawnPics/Commercial1a.png" alt="Residential Property" className='bg-white' height={1000} width={1000} />
                    </Paper>
                </div>

                <div className="flex justify-center items-center h-full">
                    <Paper className="border-r hidden md:block">
                        <img src="lawnPics/Commercial3a.png" alt="Residential Property" className='bg-white' height={1000} width={1000} />
                    </Paper>
                    <Paper className="">
                        <img src="lawnPics/Commercial3.png" alt="Residential Property" className='bg-white' height={1000} width={1000} />
                    </Paper>
                </div>

                {/* <div className="flex justify-center items-center h-full">
                    <Paper className="border-r ">
                        <img src="lawnPics/Commercial4.png" alt="Residential Property" className='bg-white' height={1000} width={1000} />
                    </Paper>
                    <Paper className="hidden md:block">
                        <img src="lawnPics/Commercial44.png" alt="Residential Property" className='bg-white' height={1000} width={1000} />
                    </Paper>
                </div> */}

            </Carousel>
        </>
    )
}