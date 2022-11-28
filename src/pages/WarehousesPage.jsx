import axios from "axios";
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import WarehouseDetails from "../components/warehouse-details/WarehouseDetails";
import Warehouses from "../components/warehouses/Warehouses";
import DeleteModal from "./delete-modal/DeleteModal";
import Title from "../components/title/Title";
import AddWarehouse from "./AddWarehouse";
import EditWarehouse from "./EditWarehouse";

// const BACK_END = process.env.REACT_APP_BACKEND_URL;
const BACK_END = "http://localhost:8080";

const WarehousesPage = () => {
  const [warehouses, setWarehouses] = useState([]);
  const [deleteModal, setDelModal] = useState({
    isActive: false,
    table: "",
    warehouse_ID: "",
    warehouse_name: "",
  });

  useEffect(() => {
    axios.get(`${BACK_END}/warehouses`).then((res) => {
      setWarehouses(res.data);
    });
  }, [deleteModal]);

  const deleteHandler = (e, wh_ID, wh_name) => {
    console.log("warehouse_ID => ", wh_ID);
    console.log("warehouse_name=> ", wh_name);
    setDelModal((modal) => ({
      isActive: true,
      table: "warehouses",
      warehouse_ID: wh_ID,
      warehouse_name: wh_name,
    }));
  };

  const confirmDelete = async (choice) => {
    if (choice) {
      // console.log("clicked delete");
      try {
        await axios.delete(
          `${BACK_END}/warehouses/${deleteModal.warehouse_ID}`
        );
        setDelModal((modal) => ({ ...modal.isActive, isActive: false }));
        // console.log(
        //   `Deleted => ${deleteModal.warehouse_ID} => ${deleteModal.warehouse_name}`
        // );
      } catch (err) {
        console.log(err);
      }
      await axios.get(`${BACK_END}/warehouses`).then((res) => {
        setWarehouses(res.data);
      });
    } else {
      // console.log("clicked cancel");
      setDelModal((modal) => ({ ...modal.isActive, isActive: false }));
    }
  };

  return (
    <>
      {deleteModal.isActive && (
        <DeleteModal
          deleteModal={deleteModal}
          warehouse_name={deleteModal.warehouse_name}
          confirmDelete={confirmDelete}
        />
      )}
      <Title />
      <Routes>
        <Route
          path="/"
          element={
            <Warehouses warehouses={warehouses} deleteHandler={deleteHandler} />
          }
        />
        <Route path="/add" element={<AddWarehouse />} />
        <Route
          path="/:id/inventories"
          element={<WarehouseDetails warehouses={warehouses} />}
        />
        <Route path="/:id/edit" element={<EditWarehouse />} />
      </Routes>
    </>
  );
};

export default WarehousesPage;
