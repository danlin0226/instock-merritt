import React from "react";
// import { Link } from "react-router-dom";
import "./Header.scss";

export default function Header() {
  return (
    <div className="header">
      <div className="header__con1">
        <div className="header__img-con"></div>
      </div>
      <ul className="header__con2">
        <li className="header__link selected">Warehouse</li>
        <li className="header__link">Inventory</li>
      </ul>
    </div>
  );
}
