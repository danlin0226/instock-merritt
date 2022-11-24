import React, { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import InventoryPage from './pages/InventoryPage'
import WarehousesPage from './pages/WarehousesPage'
import AddWarehouse from './pages/AddWarehouse'
import EditWarehouse from './pages/EditWarehouse'

import Header from './components/header/Header'
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<WarehousesPage />} />
        <Route path="/warehouse-add" element={<AddWarehouse />} />
        <Route path="/warehouse-edit" element={<EditWarehouse />} />
        <Route path="/warehouses">
          <Route index element={<WarehousesPage />} />
          <Route path=":warehouseId" element={<WarehousesPage />} />
        </Route>
        <Route path="/inventory" element={<InventoryPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
