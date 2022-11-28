import React from "react";
import ButtonSet from "../components/buttonSet/ButtonSet";
import WarehouseForm from "../components/warehouseForm/WarehouseForm";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const URL = "http://localhost:8080/warehouses";

const AddWarehouse = ({ setWarehouses, warehouses }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchWarehouses = async () => {
      const { data } = await axios.get(URL);
      setWarehouses(data);
    };

    fetchWarehouses();
  }, []);

  const handleSubmit = (newWarehouse) => {

    axios.post(URL, newWarehouse).then((response) => {
      setWarehouses([...warehouses, response.data]);
      navigate(-1);
    });

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
