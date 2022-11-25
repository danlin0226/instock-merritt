import "./DeleteModal.scss";
import React from "react";
const DeleteModal = ({ confirmDelete, warehouse_name }) => {
  let wh_name = "Washington";
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
              Do you want to delete {warehouse_name}?
            </div>
            <div className="deletemodal__text">
              Please confirm that you&apos;d like to delete the {warehouse_name}{" "}
              from the list of warehouses. You won&apos;t be able to undo this
              action.
            </div>
          </div>
          <div className="deletemodal__sec2-innercon2">
            <button
              className="deletemodal__cancel-btn"
              onClick={() => confirmDelete(false)}
            >
              Cancel
            </button>
            <button
              className="deletemodal__delete-btn"
              onClick={() => confirmDelete(true)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
