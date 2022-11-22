import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import InventoryPage from "./pages/InventoryPage";
import WarehousesPage from "./pages/WarehousesPage";

import WarehouseDetails from "./components/warehouse-details/WarehouseDetails";

function App() {
  return (
    <>
      {/* <Header /> */}
      <WarehouseDetails />
      <Routes>
        <Route path="/" element={<WarehousesPage />} />
        <Route path="/warehouses">
          <Route index element={<WarehousesPage />} />
          <Route path=":warehouseId" element={<WarehousesPage />} />
        </Route>
        <Route path="/inventory" element={<InventoryPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
