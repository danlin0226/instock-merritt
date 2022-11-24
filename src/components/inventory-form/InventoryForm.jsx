import "./InventoryForm.scss";

const InventoryForm = () => {
  return (
    <form className="inventory__form">
      <div className="item__details">
        <h1 className="item__section-header">Item Details</h1>
        <div className="item__container">
          <label className="item__label">Item Name</label>
          <input className="item__form item__name" type="text" name="itemName" placeholder="Item Name" />
        </div>
        <div className="item__container">
          <label className="item__label">Description</label>
          <textarea
            className="item__form item__description"
            type="text"
            name="itemName"
            placeholder="Please enter a brief item description..."
          />
        </div>
        <div className="item__container">
          <label className="item__label">Category</label>
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
        <h1 className="item__section-header">Item Availability</h1>
        <div className="item__container">
          <label className="item__label">Status</label>
          <div className="item__radio-container">
            <input
              className="item__label item__radio"
              type="radio"
              id="inStock"
              name="itemStatus"
              value="In stock"
              checked
            />
              <label htmlFor="inStock">In stock</label>
            <input
              className="item__label item__radio"
              type="radio"
              id="outOfStock"
              name="itemStatus"
              value="Out of stock"
            />
              <label htmlFor="outOfStock">Out of stock</label>
          </div>
        </div>
        <div className="item__container">
          <label className="item__label">Quantity</label>
          <input className="item__form item__quantity" type="text" name="itemQuantity" placeholder="0" />
        </div>
        <div className="item__container">
          <label className="item__label">Warehouse</label>
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
    </form>
  );
};

export default InventoryForm;
