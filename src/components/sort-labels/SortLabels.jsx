import React from "react";
import sortIcon from "../../assets/Icons/sort-24px.svg";

import "./SortLabels.scss";

const SortLabels = ({ label }) => {
  return (
    <div className="sortLabels">
      <h4 className="sortLabels__name">{label}</h4>
      <img
        className={
          label !== "ACTIONS" ? "sortLabels__icon" : "sortLabels__icon--hidden"
        }
        src={sortIcon}
        alt="sort icon"
      />
    </div>
  );
};

export default SortLabels;
