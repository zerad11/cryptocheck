import React, { useState, useEffect, useMemo } from 'react';
import './DivisionComponent.css';
import ResultComponent from './DivisionUtils/ResultComponent';
import { calculateResult } from './DivisionUtils/CalculationUtils';

const DivisionComponent = ({ inputValue, bestBid, bestAsk, asks, bids, exchange }) => {
    const [resultBid, setResultBid] = useState(null);
    const [resultAsk, setResultAsk] = useState(null);

    const exchangeCommissions = useMemo(() => ({
        garantex: 1.002004008,
        okx: 1.001,
        bybit: 1.001,
        nobitex: 1.002,
        kucoin: 1.001
        // Добавьте другие биржи и их комиссии здесь
    }), []); // Пустой массив зависимостей для инициализации один раз

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
