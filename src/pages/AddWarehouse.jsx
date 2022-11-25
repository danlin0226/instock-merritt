import React from "react";
import ButtonSet from "../components/buttonSet/ButtonSet";
import WarehouseForm from "../components/warehouseForm/WarehouseForm";
import axios from "axios";
import { useEffect, useState } from "react";

const URL = "http://localhost:8080/warehouses";

const AddWarehouse = () => {
  const [warehouses, setWarehouses] = useState([]);

  useEffect(() => {
    const fetchWarehouses = async () => {
      const { data } = await axios.get(URL);
      setWarehouses(data);
    };

    fetchWarehouses();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newWarehouse = {
      warehouse_name: event.target.warehouseName.value,
      address: event.target.streetAddress.value,
      city: event.target.city.value,
      country: event.target.country.value,
      contact_name: event.target.contactName.value,
      contact_position: event.target.position.value,
      contact_phone: event.target.phoneNumber.value,
      contact_email: event.target.email.value,
    };
    axios.post(URL, newWarehouse).then((response) => {
      setWarehouses([...warehouses, response.data]);
    });
    event.target.reset();
  };

  return (
    <>
      <WarehouseForm
        handleSubmit={handleSubmit}
        Buttons={<ButtonSet buttonName="+ Add Warehouse" />}
      />
    </>
  );
};

export default AddWarehouse;
