import React from 'react';
import PropTypes from 'prop-types';

function Search({ searchState, setSearch, setResults }) {
  function searchDB(searchTerm) {
    // Todo: Create function to query json DB and use setResults
  }

  return (
    <form onSubmit={() => searchDB(searchState)}>
      <label htmlFor="search">
        Search a historical fact:
        <input type="text" value={searchState} onChange={(e) => setSearch(e.target.value)} id="search" />
      </label>
    </form>
  );
}

export default Search;

Search.propTypes = {
  searchState: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
  setResults: PropTypes.func.isRequired,
};
