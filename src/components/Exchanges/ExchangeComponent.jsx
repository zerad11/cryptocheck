import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import './ExchangeComponent.css';
import DivisionComponent from './DivisionComponent';

const ExchangeComponent = ({ exchange, tiket }) => {
    const [bestBid, setBestBid] = useState(null);
    const [bestAsk, setBestAsk] = useState(null);
    const [asks, setAsks] = useState([]);
    const [bids, setBids] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const fetchData = useCallback(async (currentTiket) => {
        try {
            console.log(currentTiket);
            const response = await axios.get(`http://localhost:5000/${exchange}/${currentTiket}`);
            const data = response.data;
            
            setBestBid(data.bestBid);
            setBestAsk(data.bestAsk);
            setAsks(data.asks);
            setBids(data.bids);
        } catch (error) {
            console.error('Error fetching data:', error);
            setBestBid("-");
            setBestAsk("-");
            setAsks([]);
            setBids([]);
        }
    }, [exchange]);

    useEffect(() => {
        fetchData(tiket);
        const interval = setInterval(() => fetchData(tiket), 2000);
        return () => clearInterval(interval);
    }, [exchange, tiket, fetchData]);

    return (
        <div className='exchange'>
            <h2 className='exchange_elements name'>{exchange}</h2>
            <h2 className='exchange_elements buy'>{bestBid}</h2>
            <h2 className='exchange_elements sell'>{bestAsk}</h2>
            <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <DivisionComponent inputValue={inputValue} bestBid={bestBid} bestAsk={bestAsk} exchange={exchange} asks={asks} bids={bids} />
        </div>
    );
};

export default ExchangeComponent;
