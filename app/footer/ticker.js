'use client'

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

function TickerComponent() {
    const ref = useRef(null);

    useEffect(() => {
        const width = ref.current.offsetWidth;
        gsap.fromTo(
            ref.current,
            { x: width },
            { x: -width, duration: 20, repeat: -1, ease: 'linear' },
        );
    }, []);

    return (
        <div ref={ref} className="ticker" style={{ whiteSpace: 'nowrap' }}>
            The starting price for just mowing/trimming any extra services is $85 (no matter the lot size)  charges will be applied  We accept cash, Cashapp, Visa debit/credit cards
        </div>
    );
}

export default TickerComponent;
