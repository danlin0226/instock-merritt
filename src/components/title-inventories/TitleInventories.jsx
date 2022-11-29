import "./TitleInventories.scss";
import React from "react";
import SearchCombo from "../search-combo/SearchCombo";

const TitleInventories = ({ addInventoriesTitleHandler }) => {
  return (
    <>
      <div className="title-inventories" style={{ height: "11.25rem" }}>
        <div className="title-inventories__text-con">
          <div className="title-inventories__text">Inventory</div>
          <div className="searchcombo__con">
            <SearchCombo
              addInventoriesTitleHandler={addInventoriesTitleHandler}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TitleInventories;
