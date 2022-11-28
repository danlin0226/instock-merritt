import axios from "axios";
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

// components
import TitleInventories from "../components/title-inventories/TitleInventories.jsx";
import Title from "../components/title/Title";
import TitleEditAdd from "../components/title-editadd/TitleEditAdd";
import InventoriesList from "../components/inventories-list/InventoriesList";
import InventoryForm from "../components/inventory-form/InventoryForm.jsx";
import DeleteModal from "./delete-modal/DeleteModal";

const BACK_END = process.env.REACT_APP_BACKEND_URL;

const InventoryPage = ({ resetAddTitle }) => {
  const [inventories, setInventories] = useState([]);
  const [addInventoriesTitle, setAddInventoriesTitle] = useState(
    !resetAddTitle
  );
  const [editInventoriesTitle, setEditInventoriesTitle] = useState(false);

  const [deleteModal, setDelModal] = useState({
    isActive: false,
    table: "inventories",
    inventory_ID: "",
    inventory_name: "",
  });

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

  const deleteHandler = (e, inv_ID, inv_name) => {
    // setDelModal((modal) => ({ ...modal.isActive, isActive: true }))
    console.log("inventory_ID => ", inv_ID);
    console.log("inventory_name=> ", inv_name);
    setDelModal((modal) => ({
      isActive: true,
      table: "inventories",
      inventory_ID: inv_ID,
      inventory_name: inv_name,
    }));
  };

  const confirmDelete = async (choice) => {
    if (choice) {
      console.log("clicked delete");
      try {
        await axios.delete(
          `${BACK_END}/inventories/${deleteModal.inventory_ID}`
        );
        setDelModal((modal) => ({ ...modal.isActive, isActive: false }));
        console.log(
          `Deleted => ${deleteModal.inventory_ID} => ${deleteModal.inventory_name}`
        );
      } catch (err) {
        console.log(err);
      }
      axios.get(`${BACK_END}/inventories`).then((res) => {
        setInventories(res.data);
      });
    } else {
      console.log("clicked cancel");
      setDelModal((modal) => ({ ...modal.isActive, isActive: false }));
    }
  };

  const addInventoriesTitleHandler = () => {
    setAddInventoriesTitle((old) => !old);
  };
  const renderTitle = () => {
    if (!addInventoriesTitle) {
      // setEditInventoriesTitle(false);
      return (
        <TitleInventories
          addInventoriesTitleHandler={addInventoriesTitleHandler}
        />
      );
    }
    // if (!editInventoriesTitle) {
    //   // setAddInventoriesTitle(false);
    //   return (
    //     <TitleInventories
    //       addInventoriesTitleHandler={addInventoriesTitleHandler}
    //     />
    //   );
    // }
    else {
      // setEditInventoriesTitle(false);
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
            />
          }
        />
        <Route
          path="/add"
          element={
            <InventoryForm
              handleAddItem={handleAddItem}
              handleEditItem={handleEditItem}
            />
          }
        />
        <Route
          path="/:id/edit"
          element={
            <InventoryForm
              handleAddItem={handleAddItem}
              handleEditItem={handleEditItem}
            />
          }
        />
      </Routes>
    </>
  );
};

export default InventoryPage;
