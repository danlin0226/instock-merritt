import React from "react";
import { Routes, Route } from "react-router-dom";

import InventoryPage from "./pages/InventoryPage";
import WarehousesPage from "./pages/WarehousesPage";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import InventoryForm from "./components/inventory-form/InventoryForm";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="*" element={<WarehousesPage />} />
        <Route path="/warehouses/*" element={<WarehousesPage />} />
        <Route path="/warehouse-add" element={<AddWarehouse />} />
        <Route path="/warehouses">
          <Route index element={<WarehousesPage />} />
          <Route path=":warehouseId" element={<WarehousesPage />} />
        </Route>
        <Route path="/inventory">
          <Route index element={<InventoryPage />} />
          <Route path="add" element={<InventoryForm />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
