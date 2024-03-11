import React, { useState } from "react";
import MyButton from "./components/button/MyButton";
import './App.css'
import ExchangeComponent from "./components/Exchanges/ExchangeComponent";
import Header from "./components/Header";
import Modal from "./components/modal/modal";
<<<<<<< HEAD
import ModalContent from "./components/modal/ModalContent"

const exchanges = ['kucoin', 'okx', 'nobitex', 'bybit', 'garantex'];

function App() {
  const [tiket, setTiket] = useState("btcusdt");
  const [modalActive, setModalActive] = useState(false)
=======

function App() {
  const [tiket, setTiket] = useState("btcusdt");
  const [modalActive, setModalActive] = useState(true)
>>>>>>> c93ddffa83646d7cdf8df2bc93ac5609f039f85f
  const handleTiketChange = (newTiket) => {
    setTiket(newTiket);
  };

  return (
    <div className="App">
<<<<<<< HEAD
      <Modal active={modalActive} setActive={setModalActive}>
        <ModalContent exchanges={exchanges} />
      </Modal>

=======
      {/* <Modal active={modalActive} setActive={setModalActive}>
        <form className="modalForm">
          <p className="modalParagraph">kucoin</p>
          <input type="text" className="modalInput"/>
          <p className="modalParagraph">okx</p>
          <input type="text" className="modalInput"/>
          <p className="modalParagraph">nobitex</p>
          <input type="text" className="modalInput"/>
          <p className="modalParagraph">bybit</p>
          <input type="text" className="modalInput"/>
          <p className="modalParagraph">garantex</p>
          <input type="text" className="modalInput"/>
          <button className="modalButton">Сохранить</button>
        </form>
      </Modal> */}
>>>>>>> c93ddffa83646d7cdf8df2bc93ac5609f039f85f
      <MyButton onTiketChange={handleTiketChange} />
      <Header />
      {exchanges.map((exchange) => (
        <ExchangeComponent key={exchange} exchange={exchange} tiket={tiket} />
      ))}
    </div>
  );
}

export default App;
