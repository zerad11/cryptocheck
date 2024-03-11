import React, { useState } from "react";
import MyButton from "./components/button/MyButton";
import './App.css'
import ExchangeComponent from "./components/Exchanges/ExchangeComponent";
import Header from "./components/Header";
import Modal from "./components/modal/modal";
import ModalContent from "./components/modal/ModalContent"

const exchanges = ['kucoin', 'okx', 'nobitex', 'bybit', 'garantex'];

function App() {
  const [tiket, setTiket] = useState("btcusdt");
  const [modalActive, setModalActive] = useState(false)
  const handleTiketChange = (newTiket) => {
    setTiket(newTiket);
  };

  return (
    <div className="App">
      <Modal active={modalActive} setActive={setModalActive}>
        <ModalContent exchanges={exchanges} />
      </Modal>

      <MyButton onTiketChange={handleTiketChange} />
      <Header />
      {exchanges.map((exchange) => (
        <ExchangeComponent key={exchange} exchange={exchange} tiket={tiket} />
      ))}
    </div>
  );
}

export default App;
