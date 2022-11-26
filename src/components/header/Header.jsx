import "./Header.scss";
import React from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <div className="header__con1">
        <div className="header__img-con"></div>
      </div>
      <ul className="header__con2">
        <Link className="header__link" to="/warehouses">
          <li className="header__link-content selected">Warehouse</li>
        </Link>
        <Link className="header__link" to="/inventory">
          <li className="header__link-content">Inventory</li>
        </Link>
      </ul>
    </div>
  );
}
