'use client'

import { Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { TailSpin } from 'react-loader-spinner';
import Carousel from "react-material-ui-carousel";

export default function CarouselPage() {

    const [isSwiping, setIsSwiping] = useState(false);
    const [autoPlay, setAutoPlay] = useState(true);
    const [firstImageLoaded, setFirstImageLoaded] = useState(false);
    const [secondImageLoaded, setSecondImageLoaded] = useState(false);

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

    useEffect(() => {
        // Create a new image object for preloading the first image
        const preloadImage1 = new Image();

        // Set the source of the first image
        preloadImage1.src = 'lawnPics/Residential1.png';

        // Set an onload event handler for the first image
        // This will be called once the image is fully loaded
        preloadImage1.onload = () => setFirstImageLoaded(true);

        const preloadImage2 = new Image();
        preloadImage2.src = 'lawnPics/Residential1.png';
        preloadImage2.onload = () => setSecondImageLoaded(true);
    }, []);

    if (!firstImageLoaded || !secondImageLoaded) {
        // Display loading screen if either of the images is not yet loaded
        return <div className="flex justify-center items-center h-96">
            <h1 className="text-5xl">Loading...</h1>
            <TailSpin type="TailSpin" color="#00BFFF" height={50} width={50} />
        </div>;
    }

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