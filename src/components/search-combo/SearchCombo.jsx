import "./SearchCombo.scss";
import { useNavigate } from "react-router-dom";

const SearchCombo = ({ show }) => {
  const text = "+ Add new warehouse";
  let nav = useNavigate();
  const clickHandler = () => {
    nav("/warehouses/add");
  };
  return (
    <div className={`searchcombo ${show ? "" : "searchcombo__hide"}`}>
      <input
        type="text"
        className="searchcombo__searchbar"
        placeholder="Search..."
      />
      <button onClick={clickHandler} className="searchcombo__button">
        {text}
      </button>
    </div>
  );
};

export default SearchCombo;
