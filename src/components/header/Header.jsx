import React from "react";
// import { Link } from "react-router-dom";
import logo from "../../assets/Logo/InStock-Logo_1x.png";
import "./Header.scss";

export default function Header() {
  return (
    <div className="header">
      <img className="header__logo" src={logo} alt="InStock Logo" />
      <ul className="header__link-wrapper">
        {/* <Link> */}
        <li className="header__link">Warehouse</li>
        {/* </Link>
        <Link> */}
        <li className="header__link">Inventory</li>
        {/* </Link> */}
      </ul>
    </div>
  );
}
