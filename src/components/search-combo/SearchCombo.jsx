import "./SearchCombo.scss";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "../button/Button";

import SearchIcon from "../../assets/Icons/search-24px.svg";

const SearchCombo = ({
  addWarehouseTitleHandler,
  addInventoriesTitleHandler,
}) => {
  const location = useLocation();
  let pathname = location.pathname;
  let nav = useNavigate();
  let m = /(?=.*warehouses.*)(?!.*inventories).*/;
  const clickHandler_wh_add = () => {
    nav("/warehouses/add");
    addWarehouseTitleHandler();
  };

  const clickHandler_inv = () => {
    nav("/inventories/add");
    addInventoriesTitleHandler();
  };

  const renderButtons = () => {
    switch (true) {
      case pathname === "/":
        return (
          <Button
            buttonType={"button"}
            additionalClasses={"searchcombo__button"}
            clickHandler={clickHandler_wh_add}
            buttonText={"+ Add New Warehouse"}
          />
        );
      case m.test(pathname):
        return (
          <Button
            buttonType={"button"}
            additionalClasses={"searchcombo__button"}
            clickHandler={clickHandler_wh_add}
            buttonText={"+ Add New Warehouse"}
          />
        );
      default:
        return (
          <Button
            buttonType={"button"}
            additionalClasses={"searchcombo__button"}
            clickHandler={clickHandler_inv}
            buttonText={"+ Add New Item"}
          />
        );
    }
  };
  return (
    <div className="searchcombo">
      <div className="searchcombo__container">
        <input
          type="text"
          className="searchcombo__searchbar"
          placeholder="Search..."
        />
        <img
          src={SearchIcon}
          alt="gray magnifying glass"
          className="searchcombo__searchicon"
        />
      </div>
      {renderButtons()}
    </div>
  );
};

export default SearchCombo;
