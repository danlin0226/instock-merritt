import "./DeleteModal.scss";
import React from "react";
import Button from "../../components/button/Button";
const DeleteModal = ({ deleteModal, confirmDelete, warehouse_name }) => {
  let wh = deleteModal.table.match(/warehouse/);
  return (
    <div className="deletemodal">
      <div className="deletemodal__content">
        <div className="deletemodal__sec-con1">
          <span className="close" onClick={() => confirmDelete(false)}>
            &times;
          </span>
        </div>
        <div className="deletemodal__sec-con2">
          <div className="deletemodal__sec2-innercon1">
            <div className="deletemodal__question">
              Delete {wh ? warehouse_name : deleteModal.inventory_name}
              &nbsp;warehouse?
            </div>
            <div className="deletemodal__text">
              Please confirm that you&apos;d like to delete&nbsp;
              {wh ? warehouse_name : deleteModal.inventory_name}&nbsp;from the
              list of {wh ? deleteModal.table : deleteModal.table}. You
              won&apos;t be able to undo this action.
            </div>
          </div>
          <div className="deletemodal__sec2-innercon2">
            <button
              className="deletemodal__cancel-btn"
              type="button"
              onClick={() => confirmDelete(false)}
            >
              Cancel
            </button>
            <Button
              buttonType={"button"}
              additionalClasses={"deletemodal__delete-btn"}
              clickHandler={() => confirmDelete(true)}
              buttonText={"Delete"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
