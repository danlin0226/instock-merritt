import React from "react";
import "./ListingsCard.scss";

import trashIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
// import chevronIcon from "../../assets/Icons/chevron_right-24px.svg";

const ListingsCard = () => {
  return (
    <article className="listingsCard">
      <div className="listingsCard__text-cont">
        <div className="listingsCard__cont-left">
          <div className="listingsCard__cont">
            <h4 className="listingsCard__title">INVENTORY ITEM</h4>
            <h3 className="listingsCard__text listingsCard__text--blue">
              Television
            </h3>
          </div>
          <div className="listingsCard__cont">
            <h4 className="listingsCard__title">CATEGORY</h4>
            <p className="listingsCard__text">Electronics</p>
          </div>
        </div>
        <div className="listingsCard__cont-right">
          <div className="listingsCard__cont">
            <h4 className="listingsCard__title">STATUS</h4>
            <h4 className="listingsCard__text">IN STOCK</h4>
          </div>
          <div className="listingsCard__cont">
            <h4 className="listingsCard__title">QTY</h4>
            <p className="listingsCard__text">500</p>
          </div>
        </div>
      </div>
      <div className="listingsCard__icon-cont">
        <img src={trashIcon} alt="trashbin" />
        <img src={editIcon} alt="pencil" />
      </div>
    </article>
  );
};

export default ListingsCard;