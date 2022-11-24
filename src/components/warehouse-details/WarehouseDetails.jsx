import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SortLabels from "../sort-labels/SortLabels";

import "./WarehouseDetails.scss";

const BACK_END = "http://localhost:8080";

const WarehouseDetails = () => {
  const [warehouseInventory, setWarehouseInventory] = useState([]); //loads a join array of warehouse and inventory
  const [selectedWarehouse, setSelectedWarehouse] = useState([]); //loads a single warehouse object

  const inventoryLabels = ["INVENTORY", "CATEGORY", "STATUS", "QTY", "ACTIONS"];

  console.log("selected", selectedWarehouse);

  const { id } = useParams();

  useEffect(() => {
    axios.get(`${BACK_END}/warehouses/${id}/inventories`).then((res) => {
      console.log("inventory", res.data);
      setWarehouseInventory(res.data);
    });

    axios.get(`${BACK_END}/warehouses/${id}`).then((res) => {
      console.log(res.data);
      setSelectedWarehouse(res.data);
    });
  }, [id]);

  return (
    <div className="warehouseDetails">
      <section className="warehouseDetails__head">
        <div className="warehouseDetails__cont">
          <h4 className="warehouseDetails__title">WAREHOUSE ADDRESS:</h4>
          <p className="warehouseDetails__text">{selectedWarehouse.address}</p>
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
        {/* <ListingsCard test={testProp}  */}
        {/* <ListingsCard />
        <ListingsCard />
        <ListingsCard />
        <ListingsCard /> */}
      </section>
    </div>
  );
};

export default WarehouseDetails;
