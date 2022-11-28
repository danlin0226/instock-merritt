import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import InventoryPage from "./pages/InventoryPage";
import WarehousesPage from "./pages/WarehousesPage";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import InventoryForm from "./components/inventory-form/InventoryForm";

function App() {
  let nav = useNavigate();
  let [resetAddTitle, setAddResetTitle] = useState(true);
  let [resetEditTitle, setEditResetTitle] = useState(false);
  let resetAddInventoryTitleHandler = (e) => {
    // e.prevenDefault();
    // setAddResetTitle(false);
    nav("/inventories");
  };

  return (
    <>
      <Header resetAddInventoryTitleHandler={resetAddInventoryTitleHandler} />
      <Routes>
        <Route path="*" element={<WarehousesPage />} />
        <Route path="/warehouses/*" element={<WarehousesPage />} />
        <Route
          path="/inventories/*"
          element={<InventoryPage resetAddTitle={resetAddTitle} />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
