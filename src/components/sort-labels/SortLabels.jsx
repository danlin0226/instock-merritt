import React from 'react';
import sortIcon from '../../assets/Icons/sort-24px.svg';

import './SortLabels.scss';

const SortLabels = ({ warehouse }) => {
  return (
    <div className="sortLabels-cont">
      <div className="sortLabels">
        <h4 className="sortLabels__name">WAREHOUSE</h4>
        <img className="sortLabels__icon" src={sortIcon} alt="sort icon" />
      </div>

      <div className="sortLabels">
        <h4 className="sortLabels__name">ADDRESS</h4>
        <img className="sortLabels__icon" src={sortIcon} alt="sort icon" />
      </div>

      <div className="sortLabels">
        <h4 className="sortLabels__name">CONTACT NAME</h4>
        <img className="sortLabels__icon" src={sortIcon} alt="sort icon" />
      </div>

      <div className="sortLabels">
        <h4 className="sortLabels__name">CONTACT INFORMATION</h4>
        <img className="sortLabels__icon" src={sortIcon} alt="sort icon" />
      </div>

      <div className="sortLabels">
        <h4 className="sortLabels__name">ACTIONS</h4>
      </div>
    </div>
  );
};

export default SortLabels;
