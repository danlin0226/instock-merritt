import "./ButtonSet.scss";
import React from "react";
import {useNavigate} from "react-router-dom";
import Button from "../button/Button";
import "../../styles/partials/_typography.scss";

function ButtonSet(props) {
  const navigate = useNavigate();
  return (
    <section className="warehouse__buttons">
      <Button
        buttonText="Cancel"
        additionalClasses="warehouse__buttons__cancel"
        clickHandler={() => navigate(-1)}
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
