import "./search-box.styles.css";

const SearchBox = ({ value, onChange }) => {
  return (
    <input
      type="search"
      className="search-box"
      placeholder="Search..."
      value={value}
      onChange={onChange}
    />
  );
};

export default SearchBox;
