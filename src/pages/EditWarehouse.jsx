import React from "react";
import ButtonSet from "../components/buttonSet/ButtonSet";
import WarehouseForm from "../components/warehouseForm/WarehouseForm";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const URL = "http://localhost:8080/warehouses";

const EditWarehouse = ({ warehouses, setWarehouses, resetTitleHandler }) => {
  const navigate = useNavigate();
  let params = useParams();

  const handleSubmit = (payload) => {
    const isFormValid = () => {
      return (
        payload.warehouse_name &&
        payload.address &&
        payload.city &&
        payload.country &&
        payload.contact_name &&
        payload.contact_position &&
        payload.contact_phone &&
        payload.contact_email
      );
    };

    if (isFormValid()) {
      axios.patch(`${URL}/${params.id}`, payload).then((response) => {
        let updWarehouses = warehouses.filter((el) => el.id !== params.id);
        setWarehouses([...updWarehouses, response.data]);
        resetTitleHandler();
        navigate("/warehouses");
      });
    } else {
      console.log("Not valid");
    }
  };

  return (
    <>
      <WarehouseForm
        id={params.id}
        handleSubmit={handleSubmit}
        Buttons={
          <ButtonSet resetTitleHandler={resetTitleHandler} buttonName="Save" />
        }
      />
    </>
  );
};

export default EditWarehouse;
