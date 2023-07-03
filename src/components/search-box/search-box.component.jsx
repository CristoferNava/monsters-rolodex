const SearchBox = ({ value, onChange }) => {
  return (
    <input
      type="text"
      className="search-box"
      placeholder="Search..."
      value={value}
      onChange={onChange}
    />
  );
};

export default SearchBox;
