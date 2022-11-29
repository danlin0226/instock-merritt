import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "./InventoryItemDetails.scss";

const BACK_END = process.env.REACT_APP_BACKEND_URL;

const InventoryItemDetails = ({
  setSelectedItemName,
  detailInventoryTitleHandler,
  viewTitleHandler,
}) => {
  const [inventoryItem, SetInventoryItem] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios.get(`${BACK_END}/inventories/${id}`).then((res) => {
      SetInventoryItem(res.data);
      setSelectedItemName(res.data.item_name);
    });
  }, [id, setSelectedItemName]);

  return (
    <div className="outer-wrapper">
      <div className="itemDetails">
        <div className="itemDetails__left">
          <div className="itemDetails__cont">
            <h4 className="itemDetails__title">ITEM DESCRIPTION:</h4>
            <p className="itemDetails__text">{inventoryItem.description}</p>
          </div>

          <div className="itemDetails__cont">
            <h4 className="itemDetails__title">CATEGORY:</h4>
            <p className="itemDetails__text">{inventoryItem.category}</p>
          </div>
        </div>
        <div className="itemDetails__right">
          <div className="itemDetails__cont itemDetails__cont--column">
            <h4 className="itemDetails__title">STATUS:</h4>
            <p
              className={`itemDetails__text ${
                inventoryItem.status === "In Stock"
                  ? "itemDetails__text--inStock"
                  : "itemDetails__text--oos"
              }`}
            >
              {inventoryItem.status}
            </p>
          </div>

          <div className="itemDetails__cont itemDetails__cont--column">
            <h4 className="itemDetails__title">QUANTITY:</h4>
            <p className="itemDetails__text">{inventoryItem.quantity}</p>
          </div>

          <div className="itemDetails__cont">
            <h4 className="itemDetails__title">WAREHOUSE:</h4>
            <p className="itemDetails__text">{inventoryItem.warehouse_name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryItemDetails;
