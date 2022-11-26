// components
import Button from "../button/Button";

import "../../styles/partials/_typography.scss";
import "../../global.scss";
import "./InventoryForm.scss";

// temporary
import axios from "axios";
import { useState, useEffect } from "react";

const InventoryForm = (warehouses, categories) => {
  const itemTest = {
    id: "3ce124a4-78b0-4d80-91b9-11f9ced631a7",
    warehouse_id: "2922c286-16cd-4d43-ab98-c79f698aeab0",
    item_name: "Phone Charger",
    description: "This USB-C phone charger features fast charging for the latest devices.",
    category: "Electronics",
    status: "In Stock",
    quantity: 10000,
    created_at: "2022-11-25T02:30:31.000Z",
    updated_at: "2022-11-25T02:30:31.000Z",
    warehouse_name: "Manhattan",
  };

  const [item, setItem] = useState({});
  const [inventories, setInventories] = useState([]);

  const categoriesList = ["Accessories", "Gear", "Electronics", "Apparel"];

  // form states
  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  const [quantity, setQuantity] = useState(-1);
  const [warehouse, setWarehouse] = useState("");

  const handleChangeItemName = (event) => {
    setItemName(event.target.value);
  };

  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };

  const handleChangeStatus = (event) => {
    setStatus(event.target.value);
  };

  const handleChangeWarehouse = (event) => {
    setWarehouse(event.target.value);
  };

  const handleChangeQuantity = (event) => {
    setQuantity(event.target.value);
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/inventories/`)
      .then(({ data }) => {
        setInventories(data);
      })
      .catch((err) => {
        console.log(`ERROR WHILE FETCHING INVENTORIES ${err}`);
      });

    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/inventories/3ce124a4-78b0-4d80-91b9-11f9ced631a7`)
      .then(({ data }) => {
        setItem(data);
      })
      .catch((err) => {
        console.log(`ERROR WHILE FETCHING INVENTORIES ${err}`);
      });
  }, []);

  function renderEdit() {
    return (
      <form className="inventory__form">
        <div className="item__details">
          <h2 className="subheader item__header">Item Details</h2>
          <div className="item__container">
            <label className="label-text">Item Name</label>
            <input
              className="item__form item__name"
              type="text"
              name="itemName"
              value={item.item_name}
              onChange={handleChangeItemName}
            />
          </div>
          <div className="item__container">
            <label className="label-text">Description</label>
            <textarea
              onChange={handleChangeDescription}
              className="item__form item__description"
              type="text"
              name="itemName"
              defaultValue={itemTest.description}
            />
          </div>
          <div className="item__container">
            <label className="label-text">Category</label>
            <select className="item__form" defaultValue={itemTest.category}>
              <option className="item__select" value="" disabled hidden>
                Please select
              </option>
              <option className="item__select" value="Electronics">
                Electronics
              </option>
              <option className="item__select" value="Accessories">
                Accessories
              </option>
              <option className="item__select" value="Apparel">
                Apparel
              </option>
            </select>
          </div>
        </div>
        <div className="item__availability">
          <h2 className="subheader item__header">Item Availability</h2>
          <div className="item__container">
            <label className="label-text">Status</label>
            <div className="item__radio-container">
              <div className="item__radio">
                <input type="radio" id="inStock" name="itemStatus" value="In stock" defaultChecked={true} />
                <label className="label-text item__radio-label" htmlFor="inStock">
                  In stock
                </label>
              </div>
              <div className="item__radio">
                <input type="radio" id="outOfStock" name="itemStatus" value="Out of stock" />
                <label className="label-text item__radio-label" htmlFor="outOfStock">
                  Out of stock
                </label>
              </div>
            </div>
          </div>
          <div className="item__container">
            <label className="label-text">Quantity</label>
            <input
              className="item__form item__quantity"
              type="text"
              name="itemQuantity"
              value={itemTest.quantity}
              onChange={handleChangeQuantity}
            />
          </div>
          <div className="item__container">
            <label className="label-text">Warehouse</label>
            <select className="item__form" defaultValue={itemTest.warehouse_name}>
              <option className="item__select" value="" disabled hidden>
                Please select
              </option>
              <option className="item__select" value="Washington">
                Washington
              </option>
              <option className="item__select" value="SF">
                San Francisco
              </option>
              <option className="item__select" value="Miami">
                Miami
              </option>
            </select>
          </div>
        </div>
        <div className="item__buttons">
          <Button buttonText="Cancel" classes="button button-text item__buttons-cancel"></Button>
          <Button buttonText="+Add Item" classes="button button-text item__buttons-add"></Button>
        </div>
      </form>
    );
  }

  function renderAdd() {
    return (
      <form className="inventory__form">
        <div className="item__details">
          <h2 className="subheader item__header">Item Details</h2>
          <div className="item__container">
            <label className="label-text">Item Name</label>
            <input className="item__form item__name" type="text" name="itemName" placeholder="Item Name" />
          </div>
          <div className="item__container">
            <label className="label-text">Description</label>
            <textarea
              className="item__form item__description"
              type="text"
              name="itemName"
              placeholder="Please enter a brief item description..."
            />
          </div>
          <div className="item__container">
            <label className="label-text">Category</label>
            <select className="item__form" defaultValue="">
              <option className="item__select" value="" disabled hidden>
                Please select
              </option>
              <option className="item__select" value="Electronics">
                Electronics
              </option>
              <option className="item__select" value="Accessories">
                Accessories
              </option>
              <option className="item__select" value="Apparel">
                Apparel
              </option>
            </select>
          </div>
        </div>
        <div className="item__availability">
          <h2 className="subheader item__header">Item Availability</h2>
          <div className="item__container">
            <label className="label-text">Status</label>
            <div className="item__radio-container">
              <div className="item__radio">
                <input type="radio" id="inStock" name="itemStatus" value="In stock" defaultChecked={true} />
                <label className="label-text item__radio-label" htmlFor="inStock">
                  In stock
                </label>
              </div>
              <div className="item__radio">
                <input type="radio" id="outOfStock" name="itemStatus" value="Out of stock" />
                <label className="label-text item__radio-label" htmlFor="outOfStock">
                  Out of stock
                </label>
              </div>
            </div>
          </div>
          <div className="item__container">
            <label className="label-text">Quantity</label>
            <input className="item__form item__quantity" type="text" name="itemQuantity" placeholder="0" />
          </div>
          <div className="item__container">
            <label className="label-text">Warehouse</label>
            <select className="item__form" defaultValue="">
              <option className="item__select" value="" disabled hidden>
                Please select
              </option>
              <option className="item__select" value="Washington">
                Washington
              </option>
              <option className="item__select" value="SF">
                San Francisco
              </option>
              <option className="item__select" value="Miami">
                Miami
              </option>
            </select>
          </div>
        </div>
        <div className="item__buttons">
          <Button buttonText="Cancel" classes="button button-text item__buttons-cancel"></Button>
          <Button buttonText="+Add Item" classes="button button-text item__buttons-add"></Button>
        </div>
      </form>
    );
  }

  return item ? renderEdit() : renderAdd();
};

export default InventoryForm;
