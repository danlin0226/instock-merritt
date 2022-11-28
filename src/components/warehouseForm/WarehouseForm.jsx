import "./WarehouseForm.scss";
import React from "react";
import Error from "../error/Error";
import { useState, useEffect } from "react";
import axios from "axios";

function WarehouseForm(props) {
  const [isSubmit, setIsSubmit] = useState(false);
  const [emailValid, setEmailValid] = useState(true);
  const [phoneValid, setPhoneValid] = useState(true);
  const [warehouseName, setWarehouseName] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [contactName, setContactName] = useState("");
  const [position, setPosition] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (props.id) {
      const FULLURL = `http://localhost:8080/warehouses/${props.id}`;

      const fetchWarehouseData = async () => {
        try {
          const { data } = await axios.get(`${FULLURL}`);
          setWarehouseName(data.warehouse_name);
          setStreetAddress(data.address);
          setCity(data.city);
          setCountry(data.country);
          setContactName(data.contact_name);
          setPosition(data.contact_position);
          setPhoneNumber(data.contact_phone);
          setEmail(data.contact_email);
        } catch (err) {
          console.log(err, "Something went wrong!");
        }
      };
      fetchWarehouseData();
    }
  }, []);

  const handleChangeWarehouseName = (event) => {
    setWarehouseName(event.target.value);
  };

  const handleChangeStreetAddress = (event) => {
    setStreetAddress(event.target.value);
  };

  const handleChangeCity = (event) => {
    setCity(event.target.value);
  };

  const handleChangeCountry = (event) => {
    setCountry(event.target.value);
  };

  const handleChangeContactName = (event) => {
    setContactName(event.target.value);
  };

  const handleChangePosition = (event) => {
    setPosition(event.target.value);
  };

  const handleChangePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  function validationHandler(event) {
    event.preventDefault();
    setIsSubmit(true);

    const validateEmail = (email) => {
      const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (mailformat.test(email)) {
        setEmailValid(true);
        return true;
      } else {
        setEmailValid(false);
        return false;
      }
    };

    const validatePhone = (phone) => {
      const phoneformat = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
      if (phoneformat.test(phone)) {
        setPhoneValid(true);
        return true;
      } else {
        setPhoneValid(false);
        return false;
      }
    };

    if (validatePhone(phoneNumber) && validateEmail(email)) {
      const updateWarehouse = {
        warehouse_name: warehouseName,
        address: streetAddress,
        city: city,
        country: country,
        contact_name: contactName,
        contact_position: position,
        contact_phone: phoneNumber,
        contact_email: email,
      };

      props.handleSubmit(updateWarehouse);
      event.target.reset();
    }
  }

  return (
    <form className="warehouse" action="submit" onSubmit={validationHandler}>
      <section className="warehouse__section">
        <div className="warehouse__section__details">
          <h1 className="warehouse__section__details__header">
            Warehouse Details
          </h1>
          <label
            className="warehouse__section__details__label"
            htmlFor="warehouseName"
          >
            Warehouse Name
          </label>
          <input
            className={`warehouse__section__details__input ${
              !warehouseName && isSubmit
                ? "warehouse__section__details__input-flagged"
                : ""
            }`}
            type="text"
            name="warehouseName"
            placeholder="Warehouse Name"
            onChange={handleChangeWarehouseName}
            value={warehouseName}
          />
          {!warehouseName && isSubmit && <Error />}

          <label
            className="warehouse__section__details__label"
            htmlFor="streetAddress"
          >
            Street Address
          </label>
          <input
            className={`warehouse__section__details__input ${
              !streetAddress && isSubmit
                ? "warehouse__section__details__input-flagged"
                : ""
            }`}
            type="text"
            name="streetAddress"
            placeholder="Street Address"
            onChange={handleChangeStreetAddress}
            value={streetAddress}
          />
          {!streetAddress && isSubmit && <Error />}
          <label className="warehouse__section__details__label" htmlFor="city">
            City
          </label>
          <input
            className={`warehouse__section__details__input ${
              !city && isSubmit
                ? "warehouse__section__details__input-flagged"
                : ""
            }`}
            type="text"
            name="city"
            placeholder="City"
            onChange={handleChangeCity}
            value={city}
          />
          {!city && isSubmit && <Error />}
          <label
            className="warehouse__section__details__label"
            htmlFor="country"
          >
            Country
          </label>
          <input
            className={`warehouse__section__details__input ${
              !country && isSubmit
                ? "warehouse__section__details__input-flagged"
                : ""
            }`}
            type="text"
            name="country"
            placeholder="Country"
            onChange={handleChangeCountry}
            value={country}
          />
          {!country && isSubmit && <Error />}
        </div>

        <div className="warehouse__section__details warehouse__section__details-right">
          <h1 className="warehouse__section__details__header">
            Contact Details
          </h1>
          <label
            className="warehouse__section__details__label"
            htmlFor="contactName"
          >
            Contact Name
          </label>
          <input
            className={`warehouse__section__details__input ${
              !contactName && isSubmit
                ? "warehouse__section__details__input-flagged"
                : ""
            }`}
            type="text"
            name="contactName"
            placeholder="Contact Name"
            onChange={handleChangeContactName}
            value={contactName}
          />
          {!contactName && isSubmit && <Error />}

          <label
            className="warehouse__section__details__label"
            htmlFor="position"
          >
            Position
          </label>
          <input
            className={`warehouse__section__details__input ${
              !position && isSubmit
                ? "warehouse__section__details__input-flagged"
                : ""
            }`}
            type="text"
            name="position"
            placeholder="Position"
            onChange={handleChangePosition}
            value={position}
          />
          {!position && isSubmit && <Error />}
          <label
            className="warehouse__section__details__label"
            htmlFor="phoneNumber"
          >
            Phone Number
          </label>
          <input
            className={`warehouse__section__details__input ${
              (!phoneNumber || !phoneValid) && isSubmit
                ? "warehouse__section__details__input-flagged"
                : ""
            }`}
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            onChange={handleChangePhoneNumber}
            value={phoneNumber}
          />
          {!phoneNumber && isSubmit && <Error />}
          {!phoneValid && isSubmit && (
            <Error customMessage={"Provide right format"} />
          )}
          <label className="warehouse__section__details__label" htmlFor="email">
            Email
          </label>
          <input
            className={`warehouse__section__details__input ${
              (!phoneNumber || !phoneValid) && isSubmit
                ? "warehouse__section__details__input-flagged"
                : ""
            }`}
            type="text"
            name="email"
            placeholder="Email"
            onChange={handleChangeEmail}
            value={email}
          />
          {!email && isSubmit && <Error />}
          {!emailValid && isSubmit && (
            <Error customMessage={"Provide right format"} />
          )}
        </div>
      </section>
      {props.Buttons}
    </form>
  );
}

export default WarehouseForm;
