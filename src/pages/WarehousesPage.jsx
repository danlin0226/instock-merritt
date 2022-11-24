import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from '../components/header/Header';

import WarehouseDetails from '../components/warehouse-details/WarehouseDetails';
import Warehouses from '../components/warehouses/Warehouses';

// const BACK_END = process.env.REACT_APP_BACKEND_URL;
const BACK_END = 'http://localhost:8080';

const WarehousesPage = () => {
  const [warehouses, setWarehouses] = useState([]);
  const [selectedWarehouse, setSelectedWarehouse] = useState(null);

  useEffect(() => {
    console.log(`${BACK_END}/warehouses`);
    axios.get(`${BACK_END}/warehouses`).then((res) => {
      setWarehouses(res.data);
    });
  }, []);

  // const clickHandler = (e) => {
  //   set();
  // };

  return (
    <>
      <Routes>
        <Route path="/" element={<Warehouses warehouses={warehouses} />} />
        <Route
          path="/:id/inventories"
          element={<WarehouseDetails warehouses={warehouses} />}
        />
      </Routes>
      {/* <Route
          path="/hi"
          element={<Header selectedWarehouse={selectedWarehouse} />}
        /> */}
    </>
  );
};

export default WarehousesPage;
