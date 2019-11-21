import React from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import axios from 'axios';

// nextSvg = path("M 360.731 229.075 l -225.1 -225.1 c -5.3 -5.3 -13.8 -5.3 -19.1 0 s -5.3 13.8 0 19.1 l 215.5 215.5 l -215.5 215.5 c -5.3 5.3 -5.3 13.8 0 19.1 c 2.6 2.6 6.1 4 9.5 4 c 3.4 0 6.9 -1.3 9.5 -4 l 225.1 -225.1 C 365.931 242.875 365.931 234.275 360.731 229.075 Z");
// previousSvg = path("M 145.188 238.575 l 215.5 -215.5 c 5.3 -5.3 5.3 -13.8 0 -19.1 s -13.8 -5.3 -19.1 0 l -225.1 225.1 c -5.3 5.3 -5.3 13.8 0 19.1 l 225.1 225 c 2.6 2.6 6.1 4 9.5 4 s 6.9 -1.3 9.5 -4 c 5.3 -5.3 5.3 -13.8 0 -19.1 L 145.188 238.575 Z");

function Paginate({ pageCountState, setResults, searchState }) {
  function handleClick(data) {
    const selectedPage = data.selected + 1;
    axios.get(`/events?q=${searchState}&_page=${selectedPage}&_limit=10`)
      .then((results) => {
        setResults(results.data);
      })
      .catch((err)=> console.log(err)); // eslint-disable-line
  }

  return (
    <div>
      <ReactPaginate
        previousLabel="previous"
        previousClassName="previous"
        nextLabel="next"
        nextClassName="next"
        breakLabel="..."
        breakClassName="break-me"
        pageCount={pageCountState}
        marginPagesDisplayed={1}
        pageRangeDisplayed={2}
        onPageChange={handleClick}
        containerClassName="pagination"
        subContainerClassName="pages pagination"
        activeClassName="active"
      />
    </div>
  );
}

export default Paginate;

Paginate.propTypes = {
  pageCountState: PropTypes.number.isRequired,
  searchState: PropTypes.string.isRequired,
  setResults: PropTypes.func.isRequired,
};
