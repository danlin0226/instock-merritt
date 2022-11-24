// components
import Button from "../button/Button";

import "../../styles/partials/_typography.scss";
import "../../global.scss";
import "./InventoryForm.scss";

// components
import Button from "../button/Button";

const InventoryForm = () => {
  return (
    <form className="inventory__form">
      <div className="item__details">
        <h2 className="subheader">Item Details</h2>
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
        <h2 className="subheader">Item Availability</h2>
        <div className="item__container">
          <label className="label-text">Status</label>
          <div className="item__radio-container">
            <div className="item__radio">
              <input type="radio" id="inStock" name="itemStatus" value="In stock" checked />
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
};

export default InventoryForm;
