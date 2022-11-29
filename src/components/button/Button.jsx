// styling
import "./Button.scss";

export default function Button({
  buttonIcon,
  buttonText,
  additionalClasses,
  clickHandler,
  buttonType,
}) {
  return (
    <button
      type={buttonType}
      className={`button button-text ${additionalClasses}`}
      onClick={clickHandler}
    >
      {buttonIcon && <img className="button__icon" src={buttonIcon}></img>}
      {buttonText}
    </button>
  );
}
