import React from 'react';

const Button = ({ activeButton, handleSetTiket, tiket }) => {
    return (
        <button
            className={activeButton === tiket ? "active" : ""}
            onClick={() => handleSetTiket(tiket)}
        >
            <b>{tiket.toUpperCase()}</b>
        </button>
    );
};

export default Button;
