import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import WarehouseDetails from '../components/warehouse-details/WarehouseDetails';
import Warehouses from '../components/warehouses/Warehouses';

// const BACK_END = process.env.REACT_APP_BACKEND_URL;
const BACK_END = 'http://localhost:8080';

const WarehousesPage = () => {
  const [warehouses, setWarehouses] = useState([]);

  useEffect(() => {
    console.log(`${BACK_END}/warehouses`);
    axios.get(`${BACK_END}/warehouses`).then((res) => {
      setWarehouses(res.data);
    });
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Warehouses warehouses={warehouses} />} />
        <Route
          path="/:id/inventories"
          element={<WarehouseDetails warehouses={warehouses} />}
        />
      </Routes>
    </>
  );
};

export default WarehousesPage;
