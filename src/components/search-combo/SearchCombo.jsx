import "./SearchCombo.scss";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "../button/Button";

const SearchCombo = ({ editWarehouseTitleHandler }) => {
  const text = "+ Add new warehouse";
  const location = useLocation();
  let pathname = location.pathname;
  let nav = useNavigate();
  console.log("just / pathname", pathname);
  // let m_inv = /(?=.*inventories.*)/;
  let m_inv = /^((?!\/warehouses).)*$/;
  let m = /(?=.*warehouses.*)(?!.*inventories).*/;
  let singleslash = /\//;
  const clickHandler_wh_add = () => {
    nav("/warehouses/add");
    editWarehouseTitleHandler();
  };

  const clickHandler_inv = () => {
    nav("/inventories/add");
  };

  const renderButtons = () => {
    switch (true) {
      case pathname === "/":
        console.log("singleslash regex");
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
        // <button className="searchcombo__button">{text}</button>;
        console.log("inventory search combo");
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
      <input
        type="text"
        className="searchcombo__searchbar"
        placeholder="Search..."
      />
      {renderButtons()}
    </div>
  );
};

export default SearchCombo;
