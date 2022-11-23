import React from "react";
import "./ListingsCard.scss";

import trashIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
import chevronIcon from "../../assets/Icons/chevron_right-24px.svg";

const ListingsCard = () => {
  return (
    <article className="listingsCard">
      <div className="listingsCard__header">
        <div>INVENTORY ITEM</div>
        <div>CATEGORY</div>
        <div>STATUS</div>
        <div>QTY</div>
        <div>ACTIONS</div>
      </div>
      <div className="listingsCard__cont listingsCard__cont--first">
        <h4 className="listingsCard__title">INVENTORY ITEM</h4>
        <h3 className="listingsCard__text listingsCard__text--blue">
          Television{" "}
          <img className="listingsCard__chev" src={chevronIcon} alt="chevron" />
        </h3>
      </div>

      <div className="listingsCard__cont">
        <h4 className="listingsCard__title">CATEGORY</h4>
        <p className="listingsCard__text">Electronics</p>
      </div>

      <div className="listingsCard__cont listingsCard__cont--second">
        <h4 className="listingsCard__title">STATUS</h4>
        {/* conditional for modifier needed */}
        <h4 className="listingsCard__text listingsCard__text--inStock">
          IN STOCK
        </h4>
      </div>

      <div className="listingsCard__cont">
        <h4 className="listingsCard__title">QTY</h4>
        <p className="listingsCard__text">500</p>
      </div>

      <div className="listingsCard__cont">
        <img src={trashIcon} alt="trashbin" />
        <img src={editIcon} alt="pencil" />
      </div>
    </article>
  );
};

export default ListingsCard;
