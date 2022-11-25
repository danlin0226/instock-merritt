import "./SearchCombo.scss";

const SearchCombo = () => {
  const text = "+ Add new warehouse";
  return (
    <div className="searchcombo">
      <input
        type="text"
        className="searchcombo__searchbar"
        placeholder="Search..."
      />
      <button className="searchcombo__button">{text}</button>
    </div>
  );
};

export default SearchCombo;
