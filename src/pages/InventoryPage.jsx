import axios from "axios";
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

// components
import Title from "../components/title/Title.jsx";
import InventoriesList from "../components/inventories-list/InventoriesList";
import InventoryForm from "../components/inventory-form/InventoryForm.jsx";

const BACK_END = process.env.REACT_APP_BACKEND_URL;

const InventoryPage = () => {
  const [inventories, setInventories] = useState([]);
  let activeTable = "Inventory";

  useEffect(() => {
    axios.get(`${BACK_END}/inventories`).then((res) => {
      setInventories(res.data);
    });
  }, []);

  return (
    <>
      <Title activeTable={activeTable} />
      <Routes>
        <Route path="/" element={<InventoriesList inventories={inventories} />} />
        <Route path="/add" element={<InventoryForm />} />
      </Routes>
    </>
  );
};

export default InventoryPage;
