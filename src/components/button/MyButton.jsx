import React, { useState } from 'react';
import Button from './Button';
import './MyButton.css';

const MyButton = ({ onTiketChange }) => {
    const [activeButton, setActiveButton] = useState(null);

    const handleSetTiket = (newTiket) => {
        onTiketChange(newTiket);
        setActiveButton(newTiket);
    };

    const tikets = ["btcusdt", "ethusdt", "ltcusdt", "dogeusdt", "shibusdt", "xrpusdt", "solusdt"];

    return (
        <div className='MyButton'>
            {tikets.map((tiket) => (
                <Button
                    key={tiket}
                    activeButton={activeButton}
                    handleSetTiket={handleSetTiket}
                    tiket={tiket}
                />
            ))}
        </div>
    );
};

export default MyButton;
