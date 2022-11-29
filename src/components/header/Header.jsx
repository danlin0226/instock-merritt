import "./Header.scss";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

export default function Header({ resetAddInventoryTitleHandler }) {
  const nav = useNavigate();
  return (
    <div className="header">
      <div className="header__con1">
        <div className="header__img-con" onClick={() => nav("/")}></div>
      </div>
      <ul className="header__con2">
        <NavLink
          activeClassName="active"
          className={"header__link"}
          to="/"
        >
          <li className="header__link-content">Warehouse</li>
        </NavLink>
        <NavLink
          activeClassName="active"
          className={"header__link"}
          to="/inventories"
          onClick={(e) => resetAddInventoryTitleHandler(e)}
        >
          <li className="header__link-content">Inventory</li>
        </NavLink>
      </ul>
    </div>
  );
}
