// components
import Button from "../button/Button";
import Error from "../error/Error";

import "../../styles/partials/_typography.scss";
import "../../global.scss";
import "./InventoryForm.scss";

// react
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const InventoryForm = ({
  handleAddItem,
  handleEditItem,
  resetTitleHandler,
}) => {
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
  const { id } = useParams();

  const navigate = useNavigate();

  // population of select dropdown
  const [activeWarehouses, setActiveWarehouses] = useState([]);
  const [activeCategories, setActiveCategories] = useState([]);

  // form fields
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
    setQuantity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const inventoryItem = {
      item_name: itemName,
      warehouse_id: warehouse,
      description: description,
      category: category,
      status: status,
      quantity: status === "In Stock" ? quantity : 0,
    };
    if (isFormValid()) {
      if (id) {
        axios
          .patch(`${BACKEND_URL}/inventories/${id}`, inventoryItem)
          .then(({ data }) =>
            handleEditItem({
              ...data,
              warehouse_name: activeWarehouses.find(
                (warehouseItem) => warehouseItem.id === warehouse
              ).warehouse_name,
            })
          )
          .then(displayNotification("Inventory item saved! Redirecting..."))
          .catch((err) =>
            console.log(`Error while editting inventory item ${id} with ${err}`)
          );
      } else {
        axios
          .post(`${BACKEND_URL}/inventories`, inventoryItem)
          .then(({ data }) =>
            handleAddItem({
              ...data,
              warehouse_name: activeWarehouses.find(
                (warehouseItem) => warehouseItem.id === warehouse
              ).warehouse_name,
            })
          )
          .then(
            displayNotification("New inventory item created! Redirecting...")
          )
          .catch((err) =>
            console.log(`Error while adding new inventory item ${err}`)
          );
      }
    }
  };

  // helpers
  const isFormValid = () => {
    return (
      itemName &&
      description &&
      category &&
      status &&
      quantity >= 0 &&
      warehouse
    );
  };

  const displayNotification = (text) => {
    toast.success(text, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    setTimeout(() => {
      resetTitleHandler();
      navigate("/inventories");
    }, 2700);
  };

  // effects
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

  useEffect(() => {
    if (id) {
      axios
        .get(`${BACKEND_URL}/inventories/${id}/`)
        .then(({ data }) => {
          setItemName(data.item_name);
          setDescription(data.description);
          setCategory(data.category);
          setQuantity(data.quantity);
          setStatus(data.status);
          setWarehouse(data.warehouse_id);
        })
        .catch((err) => {
          console.log(`ERROR WHILE FETCHING INVENTORY ITEM ${err}`);
        });
    }
  }, [activeCategories, activeWarehouses]);

  return (
    <form
      className="inventory__form"
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <div className="item__details">
        <h2 className="subheader item__header">Item Details</h2>
        <div className="item__container">
          <label className="label-text">Item Name</label>
          <input
            className={`item__form item__name body--medium ${
              !itemName && submissionStatus ? "item__form--invalid" : ""
            }`}
            type="text"
            name="itemName"
            placeholder="Item Name"
            onChange={handleChangeItemName}
            value={itemName}
          />
          {!itemName && submissionStatus && <Error />}
        </div>
        <div className="item__container">
          <label className="label-text">Description</label>
          <textarea
            className={`item__form item__description body--medium ${
              !description && submissionStatus ? "item__form--invalid" : ""
            }`}
            type="text"
            name="itemName"
            placeholder="Please enter a brief item description..."
            value={description}
            onChange={handleChangeDescription}
          />
          {!description && submissionStatus && <Error />}
        </div>
        <div className="item__container">
          <label className="label-text">Category</label>
          <select
            className={`item__form body--medium ${
              !category && submissionStatus ? "item__form--invalid" : ""
            }`}
            value={category}
            onChange={handleChangeCategory}
          >
            <option className="item__select" value="" disabled hidden>
              Please select
            </option>
            {activeCategories &&
              activeCategories.map((category) => (
                <option
                  className="item__select"
                  value={category}
                  key={category}
                >
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
                checked={status === "In Stock"}
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
                checked={status === "Out of Stock"}
                onChange={handleChangeStatus}
              />
              <label
                className="label-text item__radio-label"
                htmlFor="outOfStock"
              >
                Out of stock
              </label>
            </div>
          </div>
        </div>
        {status === "In Stock" ? (
          <div className="item__container">
            <label className="label-text">Quantity</label>
            <input
              className={`item__form item__quantity body--medium ${
                quantity <= 0 && submissionStatus ? "item__form--invalid" : ""
              }`}
              type="text"
              name="itemQuantity"
              value={quantity}
              onChange={handleChangeQuantity}
            />
            {quantity <= 0 && submissionStatus && (
              <Error customMessage="Item is in stock. Quantity must be > 0" />
            )}
            {isNaN(quantity) && submissionStatus && (
              <Error customMessage="Invalid input. Please input a number." />
            )}
          </div>
        ) : null}
        <div className="item__container">
          <label className="label-text">Warehouse</label>
          <select
            className={`item__form body--medium ${
              !warehouse && submissionStatus ? "item__form--invalid" : ""
            }`}
            value={warehouse}
            onChange={handleChangeWarehouse}
          >
            <option className="item__select" value="" disabled hidden>
              Please select
            </option>
            {activeWarehouses &&
              activeWarehouses.map((warehouse) => (
                <option
                  className="item__select"
                  value={warehouse.id}
                  key={warehouse.id}
                >
                  {warehouse.warehouse_name}
                </option>
              ))}
          </select>
          {!warehouse && submissionStatus && <Error />}
        </div>
      </div>
      <div className="item__buttons">
        <Button
          buttonText="Cancel"
          additionalClasses="item__buttons-cancel"
          clickHandler={() => {
            resetTitleHandler();
            navigate("/inventories");
          }}
        ></Button>
        <Button
          buttonType="submit"
          buttonText={id ? "Save" : "+Add Item"}
          additionalClasses="item__buttons-add"
          clickHandler={() => setSubmissionStatus(true)}
        ></Button>
      </div>
      <ToastContainer
        progressClassName="toastProgress"
        bodyClassName="toastBody"
      />
    </form>
  );
};

export default InventoryForm;
