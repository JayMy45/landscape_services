'use client'

import { Paper } from "@mui/material";
import Carousel from "react-material-ui-carousel";

export default function CarouselPage() {


    return (
        <>
            <Carousel
                className=""
                animation="slide"
                height={300}
                swipe={true}
                next={(next, active) => console.log(`we left ${active}, and are now at ${next}`)}
                prev={(prev, active) => console.log(`we left ${active}, and are now at ${prev}`)}
            >
                <div className="flex justify-center items-center h-full">
                    <Paper className=" border-r">
                        <img src="lawnPics/Residential1a.png" alt="Flower Bed" className='bg-white' height={750} width={750} />
                    </Paper>
                    <Paper className="bg-white">
                        <img src="lawnPics/Residential1.png" alt="Flower Bed" className='bg-white' height={750} width={750} />
                    </Paper>
                </div>

                <div className="flex justify-center items-center h-full">
                    <Paper className=" border-r">
                        <img src="lawnPics/Residential2.png" alt="Flower Bed" className='bg-white' height={750} width={750} />
                    </Paper>
                    <Paper className="bg-white">
                        <img src="lawnPics/Residential2a.png" alt="Flower Bed" className='bg-white' height={750} width={750} />
                    </Paper>
                </div>

                <div className="flex justify-center items-center h-full">
                    <Paper className=" border-r">
                        <img src="lawnPics/Residential3.png" alt="Flower Bed" className='bg-white' height={750} width={750} />
                    </Paper>
                    <Paper className="bg-white">
                        <img src="lawnPics/Residential3a.png" alt="Flower Bed" className='bg-white' height={750} width={750} />
                    </Paper>
                </div>

                <div className="flex justify-center items-center h-full">
                    <Paper className=" border-r">
                        <img src="lawnPics/Commercial1.png" alt="Flower Bed" className='bg-white' height={750} width={750} />
                    </Paper>
                    <Paper className="">
                        <img src="lawnPics/Commercial1a.png" alt="Flower Bed" className='bg-white' height={750} width={750} />
                    </Paper>
                </div>

            </Carousel>
        </>
    )
}