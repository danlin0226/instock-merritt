import React from "react";
import ButtonSet from "../components/buttonSet/ButtonSet";
import WarehouseForm from "../components/warehouseForm/WarehouseForm";

const InventoryPage = () => {
  return (
    <>
      <WarehouseForm Buttons={<ButtonSet buttonName="Save" />} />
    </>
  );
};

export default InventoryPage;
