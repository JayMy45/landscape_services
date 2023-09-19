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
                <div className="flex justify-center items-center">
                    <Paper className="bg-white">
                        <img src="FlowerBed.png" alt="Flower Bed" className='bg-white' height={200} width={200} />
                    </Paper>
                    <Paper>
                        <img src="hedges.png" alt="Flower Bed" className='bg-white' height={200} width={200} />
                    </Paper>
                    <Paper>
                        <img src="GrayHouston.png" alt="Flower Bed" className='bg-white' height={200} width={200} />
                    </Paper>

                </div>
                <div className="flex justify-center items-center py-10">
                    <Paper className="">
                        <img src="FlowerBed.png" alt="Flower Bed" className='bg-white' height={200} width={200} />
                    </Paper>
                    <Paper>
                        <img src="hedges.png" alt="Flower Bed" className='bg-white' height={200} width={200} />
                    </Paper>
                    <Paper>
                        <img src="fertilizer.png" alt="Flower Bed" className='bg-white' height={200} width={200} />
                    </Paper>

                </div>
            </Carousel>
        </>
    )
}