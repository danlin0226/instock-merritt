// styling
import "./Error.scss";
import "../../styles/partials/_typography.scss";

// assets
import ErrorIcon from "../../assets/Icons/error-24px.svg";

export default function Error({ additionalClasses, customMessage }) {
  const message = customMessage ? customMessage : "This field is required";
  return (
    <div className="error__container">
      <img className="error__icon" src={ErrorIcon} alt="icon displaying red exclamation mark"></img>
      <p className={`error body--small ${additionalClasses}`}>{message}</p>
    </div>
  );
}
