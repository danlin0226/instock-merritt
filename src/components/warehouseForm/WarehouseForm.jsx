import "./WarehouseForm.scss";
import React from "react";

function WarehouseForm(props) {
  return (
    <form className="warehouse" action="submit">
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
            className="warehouse__section__details__input"
            type="text"
            name="warehouseName"
            placeholder="Warehouse Name"
          />
          <label
            className="warehouse__section__details__label"
            htmlFor="streetAddress"
          >
            Street Address
          </label>
          <input
            className="warehouse__section__details__input"
            type="text"
            name="streetAddress"
            placeholder="Street Address"
          />
          <label className="warehouse__section__details__label" htmlFor="city">
            City
          </label>
          <input
            className="warehouse__section__details__input"
            type="text"
            name="city"
            placeholder="City"
          />
          <label
            className="warehouse__section__details__label"
            htmlFor="country"
          >
            Country
          </label>
          <input
            className="warehouse__section__details__input"
            type="text"
            name="country"
            placeholder="Country"
          />
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
            className="warehouse__section__details__input"
            type="text"
            name="contactName"
            placeholder="Contact Name"
          />
          <label
            className="warehouse__section__details__label"
            htmlFor="position"
          >
            Position
          </label>
          <input
            className="warehouse__section__details__input"
            type="text"
            name="position"
            placeholder="Position"
          />
          <label
            className="warehouse__section__details__label"
            htmlFor="phoneNumber"
          >
            Phone Number
          </label>
          <input
            className="warehouse__section__details__input"
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
          />
          <label className="warehouse__section__details__label" htmlFor="email">
            Email
          </label>
          <input
            className="warehouse__section__details__input"
            type="text"
            name="email"
            placeholder="Email"
          />
        </div>
      </section>
      {props.Buttons}
    </form>
  );
}

export default WarehouseForm;
