import React, { useRef, useState } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";

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

  const titleHandlerRef = useRef();
  const getTitleHandler = () => {
    const titleModeHandler = titleHandlerRef.current.getTitleHandler();
    titleModeHandler("default");
  };

  return (
    <>
      <Header
        titleResetHandler={getTitleHandler}
        resetAddInventoryTitleHandler={resetAddInventoryTitleHandler}
      />
      <Routes>
        <Route path="*" element={<Navigate to="/warehouses" replace />} />
        <Route
          path="/warehouses/*"
          element={<WarehousesPage ref={titleHandlerRef} />}
        />
        <Route
          path="/inventories/*"
          element={<InventoryPage ref={titleHandlerRef} />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
