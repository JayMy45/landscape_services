'use client'

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

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
        }} className='my-auto p-1 drop-shadow-lg border-t-2 border-b-2 border-zinc-100 dark:border-black'>
            <div ref={ref} className="ticker" style={{ display: 'inline-flex', whiteSpace: 'nowrap' }}>
                <div style={{ paddingRight: '0px' }} className='text-zinc-100 dark:text-blue-200'>
                    &bull; The Starting price for Mowing/Trimming is <span className='text-yellow-400'>$100</span> (<span className='uppercase'>no matter the lot size</span>) &bull; Additional Charges will be applied for Extra Services &bull; We accept Cash, Cashapp, and Visa Debit/Credit Cards &bull; Late Charges will apply when not paid immediately after Service &bull; Deposits are Required before service for New/Potential Clients
                </div>
                <div className='text-zinc-100 dark:text-blue-200'>
                    &bull; The Starting price for Mowing/Trimming is <span className='text-yellow-400'>$100</span> (<span className='uppercase'>no matter the lot size</span>) &bull; Additional Charges will be applied for Extra Services &bull; We accept Cash, Cashapp, and Visa Debit/Credit Cards &bull; Late Charges will apply when not paid immediately after Service &bull; Deposits are Required before service for New/Potential Clients
                </div>
            </div>
        </div>
    );
}
