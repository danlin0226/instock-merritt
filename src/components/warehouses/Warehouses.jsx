import React, { useRef } from "react";
import ListingsCard from "../listings-card/ListingsCard";
import SortLabels from "../sort-labels/SortLabels";

import "./Warehouses.scss";

const Warehouses = ({
  warehouses,
  deleteHandler,
  editInventoriesTitleHandler,
  detailsWarehouseTitleHandler,
}) => {
  const warehouseLabels = [
    "WAREHOUSE",
    "ADDRESS",
    "CONTACT NAME",
    "CONTACT INFORMATION",
    "ACTIONS",
  ];

  return (
    <div className="warehouses">
      <div className="warehouses__card-list-cont">
        <div className="sortLabels-cont">
          {warehouseLabels.map((label, index) => {
            return <SortLabels key={index} label={label} />;
          })}
        </div>
        {warehouses.map((warehouse) => {
          return (
            <ListingsCard
              key={warehouse.id}
              path="warehouses"
              dataItem={warehouse}
              deleteHandler={deleteHandler}
              editInventoriesTitleHandler={editInventoriesTitleHandler}
              detailsWarehouseTitleHandler={detailsWarehouseTitleHandler}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Warehouses;
