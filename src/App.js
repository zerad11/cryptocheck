import React, { useState } from "react";
import MyButton from "./components/button/MyButton";
import './App.css'
import ExchangeComponent from "./components/Exchanges/ExchangeComponent";
import Header from "./components/Header";
import Modal from "./components/modal/modal";

function App() {
  const [tiket, setTiket] = useState("btcusdt");
  const [modalActive, setModalActive] = useState(true)
  const handleTiketChange = (newTiket) => {
    setTiket(newTiket);
  };

  return (
    <div className="App">
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
      <MyButton onTiketChange={handleTiketChange} />
      <Header />
      <ExchangeComponent exchange="kucoin" tiket={tiket} />
      <ExchangeComponent exchange="okx" tiket={tiket} />
      <ExchangeComponent exchange="nobitex" tiket={tiket} />
      <ExchangeComponent exchange="bybit" tiket={tiket} />
      <ExchangeComponent exchange="garantex" tiket={tiket} />
    </div>
  );
}

export default App;
