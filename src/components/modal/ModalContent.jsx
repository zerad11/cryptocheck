import React, { useState } from 'react';

const ModalContent = ({ exchanges }) => {
  const [inputValues, setInputValues] = useState({});

  const handleInputChange = (exchange, value) => {
    setInputValues({
      ...inputValues,
      [exchange]: value
    });
  };

  const handleSaveClick = () => {
    fetch('http://localhost:5000/updateAPIs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(inputValues)
    })
    .then(response => {
      if (response.ok) {
        console.log('Data saved successfully');
      } else {
        console.error('Failed to save data');
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  return (
    <>
      {exchanges.map((exchange) => (
        <div key={exchange}>
          <p className="modalParagraph">{exchange.toUpperCase()}</p>
          <input
            type="text"
            className="modalInput"
            onChange={(e) => handleInputChange(exchange, e.target.value)}
          />
        </div>
      ))}
      <button className="modalButton" onClick={handleSaveClick}>Сохранить</button>
    </>
  );
}

export default ModalContent;
