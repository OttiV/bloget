import React from "react";
// import "./SearchBox.css";

const SearchBox = ({ search, handleInput, searchPost }) => (
  <div className="searchBox">
    <input
      type="text"
      value={search}
      onChange={handleInput}
      placeholder="Search for a blog post"
      className="inputField"
      data-cy="searchInput"
    />
    <button onClick={searchPost}>Search</button>
  </div>
);

export default SearchBox;
