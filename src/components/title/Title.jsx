import "./Title.scss";
import React from "react";
import { useLocation } from "react-router-dom";
import SearchCombo from "../search-combo/SearchCombo";

const Title = () => {
  let location = useLocation();
  let pathname = location.pathname;
  let m = pathname.match(/(warehouses).*(inventories)$/);
  let m_inv = pathname.match(/.*(inventories)$/);
  let m_warehouse = pathname.match(/(warehouses)/);
  console.log("m_warehouse", m_warehouse);

  const insertSearchComboComp = () => {
    if (m_inv) return "";
    else if (m_warehouse) return <SearchCombo />;
  };
  const wh = true;
  const inv = true;

  return (
    <div className="title" style={wh || inv ? { height: "180px" } : ""}>
      <div className="title__text-con">
        <div className="title__text">
          {m ? m[2].charAt(0).toUpperCase() + m[2].slice(1) : "Warehouses"}
        </div>
        <div className="searchcombo__con">{insertSearchComboComp()}</div>
      </div>
    </div>
  );
};

export default Title;
