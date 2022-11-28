import "./TitleInventories.scss";
import React from "react";
import { useLocation } from "react-router-dom";
import SearchCombo from "../search-combo/SearchCombo";

const TitleInventories = () => {
  let location = useLocation();
  let pathname = location.pathname;
  console.log("inside TitleInventories", pathname);
  let inv_add = /(?=.*inventories.*)(?=.*add).*/;
  const checkEditAdd = () => {
    switch (true) {
      case inv_add.test(pathname):
        console.log(
          "inside TitleInventories switch inventory/add matched",
          pathname
        );
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className="title-inventories" style={{ height: "180px" }}>
        <div className="title-inventories__text-con">
          <div className="title-inventories__text">Inventories</div>
          <div className="searchcombo__con">
            <SearchCombo />
          </div>
        </div>
      </div>
    </>
  );
};

export default TitleInventories;
