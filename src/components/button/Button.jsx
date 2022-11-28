// styling
import "./Button.scss";

export default function Button({ buttonText, additionalClasses, clickHandler, buttonType }) {
  return (
    <button type={buttonType} className={`button button-text ${additionalClasses}`} onClick={clickHandler}>
      {buttonText}
    </button>
  );
}
