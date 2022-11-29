import "./Title.scss";
import React from "react";
import { useNavigate } from "react-router-dom";
import SearchCombo from "../search-combo/SearchCombo";

const Title = ({ titleModeHandler, addWarehouseTitleHandler }) => {
  return (
    <>
      <div className="title" style={{ height: "11.25rem" }}>
        <div className="title__text-con">
          <div className="title__text">Warehouses</div>
          <div className="searchcombo__con">
            <SearchCombo addWarehouseTitleHandler={addWarehouseTitleHandler} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Title;
