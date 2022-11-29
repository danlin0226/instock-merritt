import axios from "axios";
import React, {
  useEffect,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// components
import TitleInventories from "../components/title-inventories/TitleInventories.jsx";
import Title from "../components/title/Title";
import TitleEditAdd from "../components/title-editadd/TitleEditAdd";
import TitleInventoryDetails from "../components/title-inventory-details/TitleInventoryDetails.jsx";
import InventoriesList from "../components/inventories-list/InventoriesList";
import InventoryForm from "../components/inventory-form/InventoryForm.jsx";
import DeleteModal from "./delete-modal/DeleteModal";
import InventoryItemDetails from "../components/inventory-item-details/InventoryItemDetails";

const BACK_END = process.env.REACT_APP_BACKEND_URL;

const InventoryPage = forwardRef((props, _ref) => {
  const [inventories, setInventories] = useState([]);
  const [titleMode, setTitleMode] = useState("default");
  const [editInvName, setEditInvName] = useState({
    inventory_name: "",
  });

  const [deleteModal, setDelModal] = useState({
    isActive: false,
    table: "inventories",
    inventory_ID: "",
    inventory_name: "",
  });

  const [selectedItemName, setSelectedItemName] = useState("");
  const location = useLocation();
  useImperativeHandle(_ref, () => ({
    getTitleHandler: () => {
      return setTitleMode;
    },
  }));
  useEffect(() => {
    setSelectedItemName("");
  }, [location]);

  useEffect(() => {
    axios.get(`${BACK_END}/inventories`).then((res) => {
      setInventories(res.data);
    });
  }, []);

  const handleAddItem = (newItem) => {
    setInventories([...inventories, newItem]);
  };

  const handleEditItem = (modifiedItem) => {
    setInventories(
      inventories.map((item) =>
        item.id === modifiedItem.id ? modifiedItem : item
      )
    );
  };

  const viewTitleHandler = (e, inv_ID, inv_name) => {
    setSelectedItemName(inv_name);
  };

  const deleteHandler = (e, inv_ID, inv_name) => {
    setDelModal((modal) => ({
      isActive: true,
      table: "inventories",
      inventory_ID: inv_ID,
      inventory_name: inv_name,
    }));
  };

  const confirmDelete = async (choice) => {
    if (choice) {
      try {
        await axios.delete(
          `${BACK_END}/inventories/${deleteModal.inventory_ID}`
        );
        setDelModal((modal) => ({ ...modal.isActive, isActive: false }));
      } catch (err) {
        console.log(err);
      }
      axios.get(`${BACK_END}/inventories`).then((res) => {
        setInventories(res.data);
      });
    } else {
      setDelModal((modal) => ({ ...modal.isActive, isActive: false }));
    }
  };

  const addInventoriesTitleHandler = () => {
    setTitleMode("add");
  };

  const editSingleInventoryTitleHandler = (e, inv_name) => {
    setEditInvName({
      inventory_name: inv_name,
    });
    setTitleMode("edit");
  };

  const detailInventoryTitleHandler = () => {
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
            table={"Inventory Item"}
            titleModeHandler={titleModeHandler}
          />
        );
      case "edit":
        return (
          <TitleEditAdd
            verb={"Edit"}
            table={"Inventory Item"}
            titleModeHandler={titleModeHandler}
          />
        );
      case "details":
        return (
          <TitleInventoryDetails
            item={selectedItemName}
            titleModeHandler={titleModeHandler}
            editSingleInventoryTitleHandler={editSingleInventoryTitleHandler}
          />
        );
      case "default":
        return (
          <TitleInventories
            addInventoriesTitleHandler={addInventoriesTitleHandler}
            editSingleInventoryTitleHandler={editSingleInventoryTitleHandler}
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
            <InventoriesList
              inventories={inventories}
              deleteHandler={deleteHandler}
              detailInventoryTitleHandler={detailInventoryTitleHandler}
              editSingleInventoryTitleHandler={editSingleInventoryTitleHandler}
              viewTitleHandler={viewTitleHandler}
            />
          }
        />
        <Route
          path="/add"
          element={
            <InventoryForm
              handleAddItem={handleAddItem}
              handleEditItem={handleEditItem}
              resetTitleHandler={titleModeHandler}
            />
          }
        />
        <Route
          path="/:id/edit"
          element={
            <InventoryForm
              handleAddItem={handleAddItem}
              handleEditItem={handleEditItem}
              resetTitleHandler={titleModeHandler}
            />
          }
        />
        <Route
          path="/:id"
          element={
            <InventoryItemDetails setSelectedItemName={setSelectedItemName} />
          }
        />
      </Routes>
    </>
  );
});

export default InventoryPage;
