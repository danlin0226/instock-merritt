import "./ButtonSet.scss";
import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button/Button";
import "../../styles/partials/_typography.scss";

function ButtonSet(props) {
  const navigate = useNavigate();
  const { resetTitleHandler } = props;
  return (
    <section className="warehouse__buttons">
      <Button
        buttonText="Cancel"
        additionalClasses="warehouse__buttons__cancel"
        clickHandler={() => {
          resetTitleHandler();
          navigate("/warehouses");
        }}
      ></Button>
      <Button
        buttonType="submit"
        buttonText={props ? props.buttonName : "+Add Warehouse"}
        additionalClasses="warehouse__buttons__submit"
      ></Button>
    </section>
  );
}

export default ButtonSet;
