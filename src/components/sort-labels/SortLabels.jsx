import React from "react";
import sortIcon from "../../assets/Icons/sort-24px.svg";

import "./SortLabels.scss";

const SortLabels = () => {
  return (
    <div className="sortLabels-cont">
      <div className="sortLabels">
        <h4 className="sortLabels__name">INVENTORY ITEM</h4>
        <img className="sortLabels__icon" src={sortIcon} alt="sort icon" />
      </div>

      <div className="sortLabels">
        <h4 className="sortLabels__name">CATEGORY</h4>
        <img className="sortLabels__icon" src={sortIcon} alt="sort icon" />
      </div>

      <div className="sortLabels">
        <h4 className="sortLabels__name">STATUS</h4>
        <img className="sortLabels__icon" src={sortIcon} alt="sort icon" />
      </div>

      <div className="sortLabels">
        <h4 className="sortLabels__name">QTY</h4>
        <img className="sortLabels__icon" src={sortIcon} alt="sort icon" />
      </div>

      <div className="sortLabels">
        <h4 className="sortLabels__name sortLabels__name--end">ACTIONS</h4>
      </div>
    </div>
  );
};

export default SortLabels;
