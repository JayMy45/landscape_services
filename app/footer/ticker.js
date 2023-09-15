'use client'

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

export default function TickerComponent() {
    const ref = useRef(null);

    useEffect(() => {
        const width = ref.current.offsetWidth;
        gsap.fromTo(
            ref.current,
            { x: 0 },
            { x: -width / 2, duration: 50, repeat: -1, ease: 'linear' },
        );
    }, []);

    return (
        <div style={{
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            backgroundImage: "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url('/computeBackground.png')",
            backgroundSize: "300px 300px",
            backgroundPosition: "center",
            backgroundRepeat: "repeat"
        }} className='my-auto p-1 drop-shadow-lg border-t-2 border-b-2 border-amber-100 dark:border-black'>
            <div ref={ref} className="ticker" style={{ display: 'inline-flex', whiteSpace: 'nowrap' }}>
                <div style={{ paddingRight: '0px' }} className='text-yellow-300 dark:text-blue-300'>
                    &bull; The starting price for mowing/trimming is $85 (no matter the lot size) &bull; Any extra services Charges will be applied &bull; We accept Cash, Cashapp, Visa Debit/Credit Cards &bull; Late charges will apply when not paid immediately after service &bull; Deposits are required before service for new potential clients
                </div>
                <div className='text-yellow-300 dark:text-blue-300'>
                    &bull; The starting price for mowing/trimming is $85 (no matter the lot size) &bull; Any extra services Charges will be applied &bull; We accept Cash, Cashapp, Visa Debit/Credit Cards &bull; Late charges will apply when not paid immediately after service &bull; Deposits are required before service for new potential clients
                </div>
            </div>
        </div>
    );
}
