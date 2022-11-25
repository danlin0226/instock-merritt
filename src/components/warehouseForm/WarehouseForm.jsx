import "./WarehouseForm.scss";
import React from "react";

function WarehouseForm(props) {
  console.log(props, "subProp");
  console.log(props.warehouse_name, "subProp");

  let {
    warehouse_name,
    address,
    city,
    country,
    contact_name,
    contact_position,
    contact_phone,
    contact_email,
  } = props;

  return (
    <form className="warehouse" action="submit" onSubmit={props.handleSubmit}>
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
            defaultValue={warehouse_name ? warehouse_name : ""}
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
            defaultValue={address ? address : ""}
          />
          <label className="warehouse__section__details__label" htmlFor="city">
            City
          </label>
          <input
            className="warehouse__section__details__input"
            type="text"
            name="city"
            placeholder="City"
            defaultValue={city ? city : ""}
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
            defaultValue={country ? country : ""}
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
            defaultValue={contact_name ? contact_name : ""}
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
            defaultValue={contact_position ? contact_position : ""}
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
            defaultValue={contact_phone ? contact_phone : ""}
          />
          <label className="warehouse__section__details__label" htmlFor="email">
            Email
          </label>
          <input
            className="warehouse__section__details__input"
            type="text"
            name="email"
            placeholder="Email"
            defaultValue={contact_email ? contact_email : ""}
          />
        </div>
      </section>
      {props.Buttons}
    </form>
  );
}

export default WarehouseForm;
