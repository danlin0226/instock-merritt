// styling
import "./Button.scss";

export default function Button({ buttonText, classes, clickHandler }) {
  return (
    <button type="submit" className={classes} onClick={clickHandler}>
      {buttonText}
    </button>
  );
}
