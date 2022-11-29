import "./TitleWarehouseEdit.scss";
import { useNavigate } from "react-router-dom";
// import Backarrow from "../../assets/Icons/arrow_back-24px.svg";

const TitleWarehouseEdit = ({ verb, warehouse_name, titleModeHandler }) => {
  let nav = useNavigate();
  return (
    <>
      <div className="title-warehouse-edit">
        <div className="title-warehouse-edit__text-con">
          <div
            className="title-warehouse-edit__img-con"
            onClick={() => {
              titleModeHandler();
              nav(-1);
            }}
          >
            <img
              className="title-warehouse-edit__img-back"
              src={require("../../assets/Icons/arrow_back-24px.svg").default}
              alt="backarrow"
            />
          </div>
          <div className="title-warehouse-edit__text">{` ${verb} Warehouse `}</div>
        </div>
      </div>
    </>
  );
};

export default TitleWarehouseEdit;
