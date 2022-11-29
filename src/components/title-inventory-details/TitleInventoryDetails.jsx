import "./TitleInventoryDetails.scss";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "../button/Button";
import pencil from "../../assets/Icons/edit-24px-white.svg";

const TitleInventoryDetails = ({
  item,
  titleModeHandler,
  editSingleInventoryTitleHandler,
}) => {
  const nav = useNavigate();
  const location = useLocation();

  return (
    <>
      <div className="title-inv-details">
        <div className="title-inv-details__text-con">
          <div
            className="title-inv-details__img-con"
            onClick={() => {
              titleModeHandler();
              nav("/inventories");
            }}
          >
            <img
              className="title-inv-details__img-back"
              src={require("../../assets/Icons/arrow_back-24px.svg").default}
              alt="backarrow"
            />
          </div>
          <div className="title-inv-details__text">{` ${item} `}</div>
          <div className="title-inv-details__button-con">
            <Button
              buttonText={"Edit"}
              buttonType={"button"}
              additionalClasses={"title-wh-details__btn"}
              buttonIcon={pencil}
              clickHandler={() => {
                editSingleInventoryTitleHandler();
                nav(`${location.pathname}/edit`);
              }}
            ></Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TitleInventoryDetails;
