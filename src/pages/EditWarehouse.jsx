import React from "react";
import ButtonSet from "../components/buttonSet/ButtonSet";
import WarehouseForm from "../components/warehouseForm/WarehouseForm";
import axios from "axios";
import { useState, useEffect } from "react";

const URL = "http://localhost:8080/warehouses";

const defaultData = {

};

const EditWarehouse = (props) => {
  const [warehouseData, setWarehouseData] = useState(defaultData);

  useEffect(() => {
    const fetchWarehouseData = async () => {
      try {
        const { data } = await axios.get(
          `${URL}/fef93621-a803-4958-b0ee-c4e8f3c9e25a`
        );
        console.log(data, "data1");
        setWarehouseData(data);
      } catch (err) {

      }
    };
    fetchWarehouseData();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const values = {
      warehouse_name: event.target.warehouseName.value,
      address: event.target.streetAddress.value,
      city: event.target.city.value,
      country: event.target.country.value,
      contact_name: event.target.contactName.value,
      contact_position: event.target.position.value,
      contact_phone: event.target.phoneNumber.value,
      contact_email: event.target.email.value,
    };
    axios.patch(`${URL}/${warehouseData.id}`, values).then((response) => {

      event.target.reset();
    });
  };

  return (
    <>
      <WarehouseForm
        warehouse_name={warehouseData.warehouse_name}
        address={warehouseData.address}
        city={warehouseData.city}
        country={warehouseData.country}
        contact_name={warehouseData.contact_name}
        contact_position={warehouseData.contact_position}
        contact_phone={warehouseData.contact_phone}
        contact_email={warehouseData.contact_email}
        handleSubmit={handleSubmit}
        Buttons={<ButtonSet buttonName="Save" />}
      />
    </>
  );
};

export default EditWarehouse;
