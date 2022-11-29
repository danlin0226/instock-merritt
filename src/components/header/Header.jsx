import "./Header.scss";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
// import { Link } from "react-router-dom";

export default function Header({
  resetAddInventoryTitleHandler,
  titleResetHandler,
}) {
  const nav = useNavigate();

  const [activeLink, setActiveLink] = useState("warehouses");
  const location = useLocation();

  useEffect(() => {
    // fetches active route i.e. /warehouses/:id returns string "warehouses"
    console.log(`activeLink is ${activeLink} ${activeLink === "warehouses"}`);
    const pathnameArr = location.pathname.split("/");
    const activePage = pathnameArr.length === 1 ? "warehouses" : pathnameArr[1];
    setActiveLink(activePage);
  }, [location]);

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
          className={`header__link ${
            activeLink === "warehouses" ? "active" : ""
          }`}
          to="/warehouses"
          onClick={() => titleResetHandler()}
        >
          <li className="header__link-content">Warehouse</li>
        </NavLink>
        <NavLink
          className={`header__link ${
            activeLink === "inventories" ? "active" : ""
          }`}
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
