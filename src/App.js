import React, { useState } from "react";
import MyButton from "./components/button/MyButton";
import './App.css'
import ExchangeComponent from "./components/Exchanges/ExchangeComponent";

function App() {
  const [tiket, setTiket] = useState("btcusdt");

  const handleTiketChange = (newTiket) => {
    setTiket(newTiket);
  };

  return (
    <div className="App">
      <MyButton onTiketChange={handleTiketChange} />
      <ExchangeComponent exchange="kucoin" tiket={tiket} />
      <ExchangeComponent exchange="okx" tiket={tiket} />
      <ExchangeComponent exchange="nobitex" tiket={tiket} />
      <ExchangeComponent exchange="bybit" tiket={tiket} />
      <ExchangeComponent exchange="garantex" tiket={tiket} />

    </div>
  );
}

export default App;
