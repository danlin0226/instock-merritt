import "./TitleInventoryDetails.scss";
import { useNavigate } from "react-router-dom";
import Button from "../button/Button";
import pencil from "../../assets/Icons/edit-24px-white.svg";

const TitleInventoryDetails = ({ item, titleModeHandler }) => {
  const nav = useNavigate();
  return (
    <>
      <div className="title-inv-details">
        <div className="title-inv-details__text-con">
          <div
            className="title-inv-details__img-con"
            onClick={() => {
              titleModeHandler();
              nav(-1);
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
            ></Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TitleInventoryDetails;
