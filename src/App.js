import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
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
