import React, { useState, useEffect } from 'react';
import './DivisionComponent.css'

const DivisionComponent = ({ inputValue, bestBid, bestAsk }) => {
    const [resultBid, setResultBid] = useState(null);
    const [resultAsk, setResultAsk] = useState(null);

    useEffect(() => {
        if (bestBid !== null && bestAsk !== null) {
            const inputValueNum = parseFloat(inputValue);
            if (!isNaN(inputValueNum)) {
                if (bestBid !== bestAsk) {
                    setResultBid((inputValueNum / bestBid).toFixed(8));
                    setResultAsk((inputValueNum / bestAsk).toFixed(8));
                } else {
                    setResultAsk('-');
                    setResultBid('-');
                }
            } else {
                setResultBid(null);
                setResultAsk(null);
            }
        } else {
            setResultBid(null);
            setResultAsk(null);
        }
    }, [inputValue, bestBid, bestAsk]);

    return (
        <div className='Division'>
            <h2 className='Division_elements'>{resultAsk}</h2>
            <h2 className='Division_elements'>{resultBid}</h2>
        </div>
    );
};

export default DivisionComponent;
