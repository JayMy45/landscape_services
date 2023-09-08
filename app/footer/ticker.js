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
            { x: -width / 2, duration: 46, repeat: -1, ease: 'linear' },
        );
    }, []);

    return (
        <div style={{ overflow: 'hidden', whiteSpace: 'nowrap' }} className='my-auto p-2'>
            <div ref={ref} className="ticker" style={{ display: 'inline-flex', whiteSpace: 'nowrap' }}>
                <div style={{ paddingRight: '9px' }}>
                    &bull; The starting price for mowing/trimming is $85 (no matter the lot size) &bull; Any extra services Charges will be applied &bull; We accept Cash, Cashapp, Visa Debit/Credit Cards &bull; Late charges will apply when not paid immediately after service &bull; Deposits are required before service for new potential clients
                </div>
                <div>
                    &bull; The starting price for mowing/trimming is $85 (no matter the lot size) &bull; Any extra services Charges will be applied &bull; We accept Cash, Cashapp, Visa Debit/Credit Cards &bull; Late charges will apply when not paid immediately after service &bull; Deposits are required before service for new potential clients
                </div>
            </div>
        </div>
    );
}
