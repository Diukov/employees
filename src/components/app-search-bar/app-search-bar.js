import './app-search-bar.css';

const SearchBar = () => {
  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder="Search employee" />
  );
};

export default SearchBar;