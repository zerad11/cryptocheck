import React, { useState, useEffect } from 'react';
import './DivisionComponent.css';
import ResultComponent from './DivisionUtils/ResultComponent';
import { calculateResult } from './DivisionUtils/CalculationUtils';

const DivisionComponent = ({ inputValue, bestBid, bestAsk, asks, bids, exchange }) => {
    const [resultBid, setResultBid] = useState(null);
    const [resultAsk, setResultAsk] = useState(null);

    const exchangeCommissions = {
        garantex: 1.002004008,
        okx: 1.50,
        // Добавьте другие биржи и их комиссии здесь
    };

    useEffect(() => {
        if (bestBid !== null && bestAsk !== null) {
            const inputValueNum = parseFloat(inputValue);
            if (!isNaN(inputValueNum)) {
                const commission = exchangeCommissions[exchange] || 1; // Получаем комиссию для выбранной биржи
                setResultAsk((calculateResult(inputValueNum, asks, commission, true)).toFixed(8));
                setResultBid((calculateResult(inputValueNum, bids, commission, false)).toFixed(8));
            } else {
                setResultBid(null);
                setResultAsk(null);
            }
        } else {
            setResultBid(null);
            setResultAsk(null);
        }
    }, [inputValue, bestBid, bestAsk, asks, bids, exchange, exchangeCommissions]);

    return (
        <div className='Division'>
            <ResultComponent result={resultAsk} />
            <ResultComponent result={resultBid} />
        </div>
    );
};

export default DivisionComponent;
