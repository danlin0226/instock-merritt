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
        <Route path="/inventories/*" element={<InventoryPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
