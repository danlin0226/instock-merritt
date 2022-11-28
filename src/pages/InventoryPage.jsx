import axios from "axios";
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

// components
import Title from "../components/title/Title.jsx";
import InventoriesList from "../components/inventories-list/InventoriesList";
import InventoryForm from "../components/inventory-form/InventoryForm.jsx";
import InventoryItemDetails from "../components/inventory-item-details/InventoryItemDetails";

const BACK_END = process.env.REACT_APP_BACKEND_URL;

const InventoryPage = () => {
  const [inventories, setInventories] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  let activeTable = "Inventory";

  console.log("inventoryPage", selectedItemName);

  useEffect(() => {
    axios.get(`${BACK_END}/inventories`).then((res) => {
      setInventories(res.data);
    });
  }, []);

  const handleAddItem = (newItem) => {
    setInventories([...inventories, newItem]);
  };

  const handleEditItem = (modifiedItem) => {
    setInventories(
      inventories.map((item) =>
        item.id === modifiedItem.id ? modifiedItem : item
      )
    );
  };

  return (
    <>
      <Title activeTable={activeTable} selectedItemName={selectedItemName} />
      <Routes>
        <Route
          path="/"
          element={<InventoriesList inventories={inventories} />}
        />
        <Route
          path="/add"
          element={
            <InventoryForm
              handleAddItem={handleAddItem}
              handleEditItem={handleEditItem}
            />
          }
        />
        <Route
          path="/:id/edit"
          element={
            <InventoryForm
              handleAddItem={handleAddItem}
              handleEditItem={handleEditItem}
            />
          }
        />
        <Route
          path="/:id/item-details"
          element={
            <InventoryItemDetails setSelectedItemName={setSelectedItemName} />
          }
        />
      </Routes>
    </>
  );
};

export default InventoryPage;
