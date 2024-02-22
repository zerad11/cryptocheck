import React from "react";
import "./Header.css"
const Header = () => {
  return (
    <div className="header">
        <h2 className="exchanges"><b>БИРЖА</b></h2>
        <h2 className="price"><b>ЦЕНА НА ПОКУПКУ</b></h2>
        <h2 className="price"><b>ЦЕНА НА ПРОДАЖУ</b></h2>
        <h2 className="usdt"><b>КОЛ-ВО USDT</b></h2>
        <h2 className="crypto"><b>КУПИТЬ</b></h2>
        <h2 className="crypto"><b>ПРОДАТЬ</b></h2>
    </div>
  );
};

export default Header;
