import React from "react";
import { Routes, Route } from "react-router-dom";

import InventoryPage from "./pages/InventoryPage";
import WarehousesPage from "./pages/WarehousesPage";
import AddWarehouse from "./pages/AddWarehouse";
import EditWarehouse from "./pages/EditWarehouse";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="*" element={<WarehousesPage />} />
        <Route path="/warehouses/*" element={<WarehousesPage />} />
        <Route path="/warehouse-add" element={<AddWarehouse />} />
        <Route path="/warehouse-edit" element={<EditWarehouse />} />
        <Route path="/inventories/*" element={<InventoryPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
