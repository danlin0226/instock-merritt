import axios from "axios";
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Title from "../components/title/Title.jsx";
import InventoriesList from "../components/inventories-list/InventoriesList";

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
      <Title />
      <Routes>
        <Route
          path="/"
          element={<InventoriesList inventories={inventories} />}
        />
      </Routes>
    </>
  );
};

export default InventoryPage;
