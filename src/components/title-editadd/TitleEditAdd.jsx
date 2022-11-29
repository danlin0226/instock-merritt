import "./TitleEditAdd.scss";
import { useNavigate } from "react-router-dom";

const TitleEditAdd = ({ verb, table, titleModeHandler }) => {
  const nav = useNavigate();
  const redirectionPath =
    table === "Warehouse" ? "/warehouses" : "/inventories";
  return (
    <>
      <div className="title-editadd">
        <div className="title-editadd__text-con">
          <div
            className="title-editadd__img-con"
            onClick={() => {
              titleModeHandler();
              nav(redirectionPath);
            }}
          >
            <img
              className="title-editadd__img-back"
              src={require("../../assets/Icons/arrow_back-24px.svg").default}
              alt="backarrow"
            />
          </div>
          <div className="title-editadd__text">{` ${verb} ${table} `}</div>
        </div>
      </div>
    </>
  );
};

export default TitleEditAdd;
