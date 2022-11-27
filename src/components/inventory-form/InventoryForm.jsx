// components
import Button from "../button/Button";
import Error from "../error/Error";

import "../../styles/partials/_typography.scss";
import "../../global.scss";
import "./InventoryForm.scss";

// react
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const InventoryForm = () => {
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

  const navigate = useNavigate();

  const [activeWarehouses, setActiveWarehouses] = useState([]);
  const [activeCategories, setActiveCategories] = useState([]);

  // form states
  const [submissionStatus, setSubmissionStatus] = useState(false); //validation to display error messages
  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("In Stock");
  const [quantity, setQuantity] = useState(0);
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
    setQuantity(Number(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const InventoryItem = {
      item_name: itemName,
      warehouse_id: warehouse,
      description: description,
      category: category,
      status: status,
      quantity: status === "In Stock" ? quantity : 0,
    };
    if (isFormValid()) {
      axios
        .post(`${BACKEND_URL}/inventories`, InventoryItem)
        .then(alert("Added new item!"))
        .catch((err) => console.log(`Error while adding new inventory item ${err}`));
    }
  };

  const isFormValid = () => {
    return itemName && description && category && status && quantity >= 0 && warehouse;
  };

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/warehouses/active`)
      .then(({ data }) => {
        setActiveWarehouses(data);
      })
      .catch((err) => {
        console.log(`ERROR WHILE FETCHING ACTIVE WAREHOUSES ${err}`);
      });

    axios
      .get(`${BACKEND_URL}/inventories/categories`)
      .then(({ data }) => {
        setActiveCategories(data);
      })
      .catch((err) => {
        console.log(`ERROR WHILE FETCHING ACTIVE CATEGORIES ${err}`);
      });
  }, []);

  return (
    <form className="inventory__form" onSubmit={handleSubmit} autoComplete="off">
      <div className="item__details">
        <h2 className="subheader item__header">Item Details</h2>
        <div className="item__container">
          <label className="label-text">Item Name</label>
          <input
            className={`item__form item__name ${!itemName && submissionStatus ? "item__form--invalid" : ""}`}
            type="text"
            name="itemName"
            placeholder="Item Name"
            onChange={handleChangeItemName}
          />
          {!itemName && submissionStatus && <Error />}
        </div>
        <div className="item__container">
          <label className="label-text">Description</label>
          <textarea
            className={`item__form item__description ${!description && submissionStatus ? "item__form--invalid" : ""}`}
            type="text"
            name="itemName"
            placeholder="Please enter a brief item description..."
            onChange={handleChangeDescription}
          />
          {!description && submissionStatus && <Error />}
        </div>
        <div className="item__container">
          <label className="label-text">Category</label>
          <select
            className={`item__form ${!category && submissionStatus ? "item__form--invalid" : ""}`}
            defaultValue=""
            onChange={handleChangeCategory}
          >
            <option className="item__select" value="" disabled hidden>
              Please select
            </option>
            {activeCategories &&
              activeCategories.map((category) => (
                <option className="item__select" value={category} key={category}>
                  {category}
                </option>
              ))}
          </select>
          {!category && submissionStatus && <Error />}
        </div>
      </div>
      <div className="item__availability">
        <h2 className="subheader item__header">Item Availability</h2>
        <div className="item__container">
          <label className="label-text">Status</label>
          <div className="item__radio-container">
            <div className="item__radio">
              <input
                type="radio"
                id="inStock"
                name="itemStatus"
                value="In Stock"
                defaultChecked={status === "In Stock"}
                onChange={handleChangeStatus}
              />
              <label className="label-text item__radio-label" htmlFor="inStock">
                In stock
              </label>
            </div>
            <div className="item__radio">
              <input
                type="radio"
                id="outOfStock"
                name="itemStatus"
                value="Out of Stock"
                defaultChecked={status === "Out of Stock"}
                onChange={handleChangeStatus}
              />
              <label className="label-text item__radio-label" htmlFor="outOfStock">
                Out of stock
              </label>
            </div>
          </div>
        </div>
        {status === "In Stock" ? (
          <div className="item__container">
            <label className="label-text">Quantity</label>
            <input
              className={`item__form item__quantity ${quantity <= 0 && submissionStatus ? "item__form--invalid" : ""}`}
              type="text"
              name="itemQuantity"
              defaultValue={0}
              onChange={handleChangeQuantity}
            />
            {quantity <= 0 && submissionStatus && <Error customMessage="Item is in stock. Quantity must be > 0" />}
          </div>
        ) : null}
        <div className="item__container">
          <label className="label-text">Warehouse</label>
          <select
            className={`item__form ${!warehouse && submissionStatus ? "item__form--invalid" : ""}`}
            defaultValue=""
            onChange={handleChangeWarehouse}
          >
            <option className="item__select" value="" disabled hidden>
              Please select
            </option>
            {activeWarehouses &&
              activeWarehouses.map((warehouse) => (
                <option className="item__select" value={warehouse.id} key={warehouse.id}>
                  {warehouse.warehouse_name}
                </option>
              ))}
          </select>
          {!warehouse && submissionStatus && <Error />}
        </div>
      </div>
      <div className="item__buttons">
        <Button buttonText="Cancel" additionalClasses="item__buttons-cancel" clickHandler={() => navigate(-1)}></Button>
        <Button
          buttonText="+Add Item"
          additionalClasses="item__buttons-add"
          clickHandler={() => setSubmissionStatus(true)}
        ></Button>
      </div>
    </form>
  );
};

export default InventoryForm;
