import "./Title.scss";
import React from "react";
import { useLocation } from "react-router-dom";
import SearchCombo from "../search-combo/SearchCombo";

const Title = ({ editWarehouseTitleHandler }) => {
  let location = useLocation();
  return (
    <>
      <div className="title" style={{ height: "180px" }}>
        <div className="title__text-con">
          <div className="title__text">Warehouses</div>
          <div className="searchcombo__con">
            <SearchCombo
              editWarehouseTitleHandler={editWarehouseTitleHandler}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Title;
