import React from 'react';
import './SearchBox.css';

const SearchBox = ({ search, searchError, handleInput, handleSubmit }) => {
  const wrapperClass = `searchBoxWrapper ${searchError && 'withError'}`;
  return (
    <div className={wrapperClass}>
      <div className="searchBox">
        <input
          type="text"
          value={search}
          onChange={handleInput}
          placeholder="Type the url of a blog post you like"
          className="inputField"
          data-cy="searchInput"
        />
        <div className="button" onClick={handleSubmit}>
          Search
        </div>
      </div>
      <div className="searchError">{searchError}</div>
    </div>
  );
};

export default SearchBox;
