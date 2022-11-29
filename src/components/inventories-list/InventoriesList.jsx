import React from "react";
import ListingsCard from "../listings-card/ListingsCard";
import SortLabels from "../sort-labels/SortLabels";

import "./InventoriesList.scss";

const InventoriesList = ({
  inventories,
  deleteHandler,
  detailInventoryTitleHandler,
  viewTitleHandler,
  editInventoriesTitleHandler,
  editSingleInventoryTitleHandler,
}) => {
  const inventoriesLabels = [
    "INVENTORY ITEM",
    "CATEGORY",
    "STATUS",
    "QTY",
    "WAREHOUSE",
    "ACTIONS",
  ];

  return (
    <div className="inventoriesList">
      <div className="inventoriesList__cardList-cont">
        <div className="sortLabels-cont">
          {inventoriesLabels.map((label, index) => {
            return <SortLabels key={index} label={label} />;
          })}
        </div>
        {inventories.map((inventoryItem) => {
          return (
            <ListingsCard
              key={inventoryItem.id}
              path="inventories"
              dataItem={inventoryItem}
              deleteHandler={deleteHandler}
              detailInventoryTitleHandler={detailInventoryTitleHandler}
              viewTitleHandler={viewTitleHandler}
              editInventoriesTitleHandler={editInventoriesTitleHandler}
              editSingleInventoryTitleHandler={editSingleInventoryTitleHandler}
            />
          );
        })}
      </div>
    </div>
  );
};

export default InventoriesList;
