import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ExchangeComponent.css';
import DivisionComponent from './DivisionComponent';

const ExchangeComponent = ({ exchange, tiket }) => {
    const [bestBid, setBestBid] = useState(null);
    const [bestAsk, setBestAsk] = useState(null);
    const [currentTiket, setCurrentTiket] = useState(tiket);
    const [inputValue, setInputValue] = useState('');

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/${exchange}/${currentTiket}`);
            const data = response.data;
            
            setBestBid(data.bestBid);
            setBestAsk(data.bestAsk);
        } catch (error) {
            console.error('Error fetching data:', error);
            setBestBid("-");
            setBestAsk("-");
        }
    };

    useEffect(() => {
        fetchData(); 
        const interval = setInterval(() => {
            fetchData();
        }, 2000);
        return () => clearInterval(interval); 
    }, [exchange, currentTiket]);

    useEffect(() => {
        setCurrentTiket(tiket);
        fetchData();
    }, [tiket]);

    return (
        <div className='exchange'>
            <h2 className='exchange_elements name'>{exchange}</h2>
            <h2 className='exchange_elements buy'>{bestBid}</h2>
            <h2 className='exchange_elements sell'>{bestAsk}</h2>
            <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <DivisionComponent inputValue={inputValue} bestBid={bestBid} bestAsk={bestAsk} />
        </div>
    );
};

export default ExchangeComponent;
