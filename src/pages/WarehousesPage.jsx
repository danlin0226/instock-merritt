import axios from "axios";
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import WarehouseDetails from "../components/warehouse-details/WarehouseDetails";
import Warehouses from "../components/warehouses/Warehouses";
import AddWarehouse from "./AddWarehouse";
import EditWarehouse from "./EditWarehouse";

// const BACK_END = process.env.REACT_APP_BACKEND_URL;
const BACK_END = "http://localhost:8080";

const WarehousesPage = () => {
  const [warehouses, setWarehouses] = useState([]);

  useEffect(() => {
    axios.get(`${BACK_END}/warehouses`).then((res) => {
      setWarehouses(res.data);
    });
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Warehouses warehouses={warehouses} />} />
        <Route path="/add" element={<AddWarehouse />} />
        <Route
          path="/:id/inventories"
          element={<WarehouseDetails warehouses={warehouses} />}
        />
        <Route path="/:id/edit" element={<EditWarehouse />} />
        <Route path="/:id/add" element={<AddWarehouse />} />
      </Routes>
    </>
  );
};

export default WarehousesPage;
