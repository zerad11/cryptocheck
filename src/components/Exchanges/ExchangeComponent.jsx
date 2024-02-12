import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ExchangeComponent.css'
const ExchangeComponent = ({ exchange, tiket }) => {
    const [bestBid, setBestBid] = useState(null);
    const [bestAsk, setBestAsk] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/${exchange}/${tiket}`);
                const data = response.data;
                
                setBestBid(data.bestBid);
                setBestAsk(data.bestAsk);
            } catch (error) {
                console.error('Error fetching data:', error);
                setBestBid("-");
                setBestAsk("-");
            }
        };

        fetchData();
    }, [exchange, tiket]);

    return (
        <div className='exchange'>
            <h2 className='exchange_elements'>{exchange}</h2>
            <h2 className='exchange_elements buy'>Best Bid: {bestBid}</h2>
            <h2 className='exchange_elements sell'>Best Ask: {bestAsk}</h2>
        </div>
    );
};

export default ExchangeComponent;
