import "./ButtonSet.scss";
import React from "react";

function ButtonSet(props) {
  return (
    <section className="warehouse__buttons">
      <button className="warehouse__buttons__cancel">Cancel</button>
      <button type="submit" className="warehouse__buttons__submit">
        {props ? props.buttonName : `+ Add Warehouse`}
      </button>
    </section>
  );
}

export default ButtonSet;
