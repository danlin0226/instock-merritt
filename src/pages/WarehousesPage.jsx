import axios from "axios";
import React, {
  useEffect,
  useState,
  useImperativeHandle,
  forwardRef,
} from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import WarehouseDetails from "../components/warehouse-details/WarehouseDetails";
import Warehouses from "../components/warehouses/Warehouses";
import DeleteModal from "./delete-modal/DeleteModal";
import Title from "../components/title/Title";
import AddWarehouse from "./AddWarehouse";
import EditWarehouse from "./EditWarehouse";
import TitleEditAdd from "../components/title-editadd/TitleEditAdd";
import TitleWarehouseEdit from "../components/title-warehouse-edit/TitleWarehouseEdit";
import TitleWarehouseDetails from "../components/title-warehouse-details/TitleWarehouseDetails";

// const BACK_END = process.env.REACT_APP_BACKEND_URL;
const BACK_END = "http://localhost:8080";

const WarehousesPage = forwardRef((props, _ref) => {
  const [warehouses, setWarehouses] = useState([]);
  const [addWarehouseTitle, setAddWarehouseTitle] = useState(false);
  const [titleMode, setTitleMode] = useState("default");
  const [editWarehouseName, setEditWarehouseName] = useState({
    warehouse_name: "",
  });
  const [deleteModal, setDelModal] = useState({
    isActive: false,
    table: "",
    warehouse_ID: "",
    warehouse_name: "",
  });

  useImperativeHandle(_ref, () => ({
    getTitleHandler: () => {
      return setTitleMode;
    },
  }));

  useEffect(() => {
    axios.get(`${BACK_END}/warehouses`).then((res) => {
      setWarehouses(res.data);
    });
  }, []);

  useEffect(() => {
    axios.get(`${BACK_END}/warehouses`).then((res) => {
      setWarehouses(res.data);
    });
  }, [deleteModal]);

  const deleteHandler = (e, wh_ID, wh_name) => {
    setDelModal((modal) => ({
      isActive: true,
      table: "warehouses",
      warehouse_ID: wh_ID,
      warehouse_name: wh_name,
    }));
  };

  const confirmDelete = async (choice) => {
    if (choice) {
      try {
        await axios.delete(
          `${BACK_END}/warehouses/${deleteModal.warehouse_ID}`
        );
        setDelModal((modal) => ({ ...modal.isActive, isActive: false }));
      } catch (err) {
        console.log(err);
      }
      await axios.get(`${BACK_END}/warehouses`).then((res) => {
        setWarehouses(res.data);
      });
    } else {
      setDelModal((modal) => ({ ...modal.isActive, isActive: false }));
    }
  };

  const addWarehouseTitleHandler = () => {
    setTitleMode("add");
  };

  const editInventoriesTitleHandler = (e, wh_name) => {
    setEditWarehouseName({
      warehouse_name: wh_name,
    });
    setTitleMode("edit");
  };

  const detailsWarehouseTitleHandler = (e, wh_name) => {
    setEditWarehouseName({
      warehouse_name: wh_name,
    });
    setTitleMode("details");
  };

  const titleModeHandler = () => {
    setTitleMode("default");
  };

  const renderTitle = () => {
    switch (titleMode) {
      case "add":
        return (
          <TitleEditAdd
            verb={"Add New"}
            table={"Warehouse"}
            titleModeHandler={titleModeHandler}
          />
        );
      case "edit":
        return (
          <TitleWarehouseEdit
            verb={"Edit"}
            titleModeHandler={titleModeHandler}
            warehouse_name={editWarehouseName.warehouse_name}
          />
        );
      case "details":
        return (
          <TitleWarehouseDetails
            titleModeHandler={titleModeHandler}
            warehouse_name={editWarehouseName.warehouse_name}
            editInventoriesTitleHandler={editInventoriesTitleHandler}
          />
        );

      case "default":
        return (
          <Title
            titleModeHandler={titleModeHandler}
            addWarehouseTitleHandler={addWarehouseTitleHandler}
          />
        );
      default:
        return <TitleEditAdd verb={"Add New"} table={"Inventory"} />;
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
      {renderTitle()}
      <Routes>
        <Route
          path="/"
          element={
            <Warehouses
              warehouses={warehouses}
              deleteHandler={deleteHandler}
              editInventoriesTitleHandler={editInventoriesTitleHandler}
              detailsWarehouseTitleHandler={detailsWarehouseTitleHandler}
            />
          }
        />
        <Route
          path="/add"
          element={
            <AddWarehouse
              setWarehouses={setWarehouses}
              warehouses={warehouses}
              resetTitleHandler={titleModeHandler}
            />
          }
        />
        <Route
          path="/:id"
          element={
            <WarehouseDetails
              warehouses={warehouses}
              resetTitleHandler={titleModeHandler}
            />
          }
        />

        <Route
          path="/:id/edit"
          element={
            <EditWarehouse
              setWarehouses={setWarehouses}
              warehouses={warehouses}
              resetTitleHandler={titleModeHandler}
            />
          }
        />
      </Routes>
    </>
  );
});

export default WarehousesPage;
