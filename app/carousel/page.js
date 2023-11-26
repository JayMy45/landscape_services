'use client'

import { Paper } from "@mui/material";
import { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";

export default function CarouselPage() {

    const [isSwiping, setIsSwiping] = useState(false);
    const [autoPlay, setAutoPlay] = useState(true);

    useEffect(() => {
        if (isSwiping) {
            setAutoPlay(false);  // Pause autoplay when swiping
        } else {
            // Resume autoplay with a delay (to not interfere immediately with the manual swipe)
            const timer = setTimeout(() => {
                setAutoPlay(true);
                console.log('changed autoplay to true')
            }, 4000);

            return () => clearTimeout(timer);  // Cleanup the timer on component unmount or state changes
        }
    }, [isSwiping]);

    return (
        <>
            <Carousel
                // * this className is used to set the height of the carousel dynamically depending on screensize
                className="carousel-container"
                animation="fade"
                indicators={false}
                autoPlay={autoPlay}
                timeout={4000}
                onSwipeStart={() => setIsSwiping(true)}
                onSwipeEnd={() => setIsSwiping(false)}
                swipe={true}
            >
                <div className="carousel-img-container flex justify-center items-center h-full">
                    <Paper className="hidden md:block">
                        <img src="lawnPics/Residential1a.png" alt="Residential Property 1" className='border-r carousel-image' />
                    </Paper>
                    <Paper className="">
                        <img src="lawnPics/Residential1.png" alt="Residential Property 1a" className='carousel-image' />
                    </Paper>
                </div>

                <div className="flex justify-center items-center h-full">
                    <Paper className="">
                        <img src="lawnPics/Residential2.png" alt="Residential Property" className='md:border-r carousel-image' />
                    </Paper>
                    <Paper className=" hidden md:block">
                        <img src="lawnPics/Residential2a.png" alt="Residential Property" className='carousel-image' />
                    </Paper>
                </div>

                <div className="flex justify-center items-center h-full">
                    <Paper className="hidden md:block">
                        <img src="lawnPics/Residential3.png" alt="Residential Property" className='border-r carousel-image' />
                    </Paper>
                    <Paper className="">
                        <img src="lawnPics/Residential3a.png" alt="Residential Property" className='carousel-image' />
                    </Paper>
                </div>

                <div className="flex justify-center items-center h-full">
                    <Paper className="hidden md:block">
                        <img src="lawnPics/resident5.png" alt="Residential Property" className='border-r carousel-image' />
                    </Paper>
                    <Paper className="">
                        <img src="lawnPics/resident5a.png" alt="Residential Property" className='carousel-image' />
                    </Paper>
                </div>

                <div className="flex justify-center items-center h-full">
                    <Paper className="hidden md:block">
                        <img src="lawnPics/resident6.png" alt="Residential Property" className='border-r carousel-image' />
                    </Paper>
                    <Paper className="">
                        <img src="lawnPics/resident6a.png" alt="Residential Property" className='carousel-image' />
                    </Paper>
                </div>

                <div className="flex justify-center items-center h-full">
                    <Paper className="">
                        <img src="lawnPics/resident7.png" alt="Residential Property" className='md:border-r carousel-image' />
                    </Paper>
                    <Paper className="hidden md:block">
                        <img src="lawnPics/resident7a.png" alt="Residential Property" className='carousel-image' />
                    </Paper>
                </div>

                <div className="flex justify-center items-center h-full">
                    <Paper className="hidden md:block">
                        <img src="lawnPics/Commercial1.png" alt="Residential Property" className='border-r carousel-image' />
                    </Paper>
                    <Paper className="">
                        <img src="lawnPics/Commercial1a.png" alt="Residential Property" className='carousel-image' />
                    </Paper>
                </div>

                <div className="flex justify-center items-center h-full">
                    <Paper className="hidden md:block">
                        <img src="lawnPics/Commercial3a.png" alt="Residential Property" className='border-r carousel-image' />
                    </Paper>
                    <Paper className="">
                        <img src="lawnPics/Commercial3.png" alt="Residential Property" className='carousel-image' />
                    </Paper>
                </div>

            </Carousel>
        </>
    )
}