import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SortLabels from "../sort-labels/SortLabels";
import ListingsCard from "../listings-card/ListingsCard";

import "./WarehouseDetails.scss";

const BACK_END = "http://localhost:8080";

const WarehouseDetails = () => {
  const [warehouseInventory, setWarehouseInventory] = useState([]); //loads a join array of warehouse and inventory
  const [selectedWarehouse, setSelectedWarehouse] = useState([]); //loads a single warehouse object

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

  return (
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
              />
            );
          })}
        </section>
      </div>
    </div>
  );
};

export default WarehouseDetails;
