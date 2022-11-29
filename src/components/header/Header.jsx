import "./Header.scss";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

export default function Header({
  resetAddInventoryTitleHandler,
  titleResetHandler,
}) {
  const nav = useNavigate();

  return (
    <div className="header">
      <div className="header__con1">
        <div
          className="header__img-con"
          onClick={() => {
            titleResetHandler();
            nav("/");
          }}
        ></div>
      </div>
      <ul className="header__con2">
        <NavLink
          className={"header__link"}
          to="/"
          onClick={() => titleResetHandler()}
        >
          <li className="header__link-content">Warehouse</li>
        </NavLink>
        <NavLink
          className={"header__link"}
          to="/inventories"
          onClick={(e) => {
            titleResetHandler();
            resetAddInventoryTitleHandler(e);
          }}
        >
          <li className="header__link-content">Inventory</li>
        </NavLink>
      </ul>
    </div>
  );
}
