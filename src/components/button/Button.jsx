// styling
import "./Button.scss";

export default function Button({ buttonText, additionalClasses, clickHandler }) {
  return (
    <button type="submit" className={`button button-text ${additionalClasses}`} onClick={clickHandler}>
      {buttonText}
    </button>
  );
}
