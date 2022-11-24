import './DeleteModal.scss'
import React from 'react'
const DeleteModal = ({ setDelOpen }) => {
  return (
    <div className="deletemodal">
      <div className="deletemodal__sec-con1">
        <div className="deletemodal__question">Do you want to delete me?</div>
        <div className="deletemodal__confirm-text">this will delete me</div>
      </div>
      <div className="deletemodal__sec-con2">
        <button className="deletemodal__cancel-btn">cancel</button>
        <button className="deletemodal__delete-btn">delete</button>
      </div>
    </div>
  )
}

export default DeleteModal
