import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SortLabels from "../sort-labels/SortLabels";
import ListingsCard from "../listings-card/ListingsCard";
import DeleteModal from "../../pages/delete-modal/DeleteModal";

import "./WarehouseDetails.scss";

const BACK_END = "http://localhost:8080";

const WarehouseDetails = () => {
  const [warehouseInventory, setWarehouseInventory] = useState([]); //loads a join array of warehouse and inventory
  const [selectedWarehouse, setSelectedWarehouse] = useState([]); //loads a single warehouse object

  const [deleteModal, setDelModal] = useState({
    isActive: false,
    table: "inventories",
    inventory_ID: "",
    inventory_name: "",
  });

  const inventoryLabels = ["INVENTORY", "CATEGORY", "STATUS", "QTY", "ACTIONS"];

  const { id } = useParams();

  useEffect(() => {
    axios.get(`${BACK_END}/warehouses/${id}/inventories`).then((res) => {
      setWarehouseInventory(res.data);
    });

    axios.get(`${BACK_END}/warehouses/${id}`).then((res) => {
      setSelectedWarehouse(res.data);
    });
  }, [id]);

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
      await axios
        .get(`${BACK_END}/warehouses/${id}/inventories`)
        .then((res) => {
          setWarehouseInventory(res.data);
        });

      await axios.get(`${BACK_END}/warehouses/${id}`).then((res) => {
        setSelectedWarehouse(res.data);
      });
    } else {
      console.log("clicked cancel");
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
      <div className="warehouseDetails">
        <div className="warehouseDetails__page-cont">
          <section className="warehouseDetails__head">
            <div className="warehouseDetails__cont">
              <h4 className="warehouseDetails__title">WAREHOUSE ADDRESS:</h4>
              <p className="warehouseDetails__text">
                {selectedWarehouse.address}
              </p>
              <p className="warehouseDetails__text">{selectedWarehouse.city}</p>
            </div>

            <div className="warehouseDetails__cont">
              <h4 className="warehouseDetails__title">CONTACT NAME:</h4>
              <p className="warehouseDetails__text">
                {selectedWarehouse.contact_name}
              </p>
              <p className="warehouseDetails__text">
                {" "}
                {selectedWarehouse.contact_position}
              </p>
            </div>
            <div className="warehouseDetails__cont">
              <h4 className="warehouseDetails__title">CONTACT INFORMATION:</h4>
              <p className="warehouseDetails__text">
                {selectedWarehouse.contact_phone}
              </p>
              <p className="warehouseDetails__text">
                {selectedWarehouse.contact_email}
              </p>
            </div>
          </section>
          <div className="sortLabels-cont">
            {inventoryLabels.map((label, index) => {
              return <SortLabels key={index} label={label} />;
            })}
          </div>
          <section>
            {warehouseInventory.map((InventoryItem, index) => {
              return (
                <ListingsCard
                  key={index}
                  path="/warehouses/inventory"
                  dataItem={InventoryItem}
                  deleteHandler={deleteHandler}
                />
              );
            })}
          </section>
        </div>
      </div>
    </>
  );
};

export default WarehouseDetails;
