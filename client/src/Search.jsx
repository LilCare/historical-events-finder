import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

function Search({ searchState, setSearch, setResults, setPageCountState }) {

  function searchDB(searchTerm) {
    axios.get(`/events?q=${searchTerm}&_page=1&_limit=10`)
      .then((results) => {
        setResults(results.data);
        const linksSplit = results.headers.link.split('page=');
        // last page will in the 3rd index in the first spot.
        const lastPageNumber = parseInt(linksSplit[3][0], 10);
        setPageCountState(lastPageNumber);
      })
      .catch((err)=> console.log(err));
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); searchDB(searchState); }}>
      <label htmlFor="search">
        Search a historical fact:
        <input
          type="text"
          id="search"
          value={searchState}
          onChange={(e) => { setSearch(e.target.value); }}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Search;

Search.propTypes = {
  searchState: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
  setResults: PropTypes.func.isRequired,
  setPageCountState: PropTypes.func.isRequired,
};
