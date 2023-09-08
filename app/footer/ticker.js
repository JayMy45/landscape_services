'use client'

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

function TickerComponent() {
    const ref = useRef(null);

    useEffect(() => {
        const width = ref.current.offsetWidth;
        gsap.fromTo(
            ref.current,
            { x: 0 },
            { x: -width / 2, duration: 40, repeat: -1, ease: 'linear' },
        );
    }, []);

    return (
        <div style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}>
            <div ref={ref} className="ticker" style={{ display: 'inline-flex', whiteSpace: 'nowrap' }}>
                <div style={{ paddingRight: '50px' }}>
                    &bull; The starting price for mowing/trimming is $85 (no matter the lot size) any extra services &bull; Charges will be applied  We accept Cash, Cashapp, Visa Debit/Credit Cards &bull; Late charges will apply when not paid immediately after service &bull; Deposits are required before service for new potential clients
                </div>
                <div>
                    &bull; The starting price for mowing/trimming is $85 (no matter the lot size) any extra services &bull; Charges will be applied  We accept Cash, Cashapp, Visa Debit/Credit Cards &bull; Late charges will apply when not paid immediately after service &bull; Deposits are required before service for new potential clients
                </div>
            </div>
        </div>
    );
}

export default TickerComponent;
