import React from 'react';
import PropTypes from 'prop-types';

function Result({ result }) {  // eslint-disable-line
  return (
    <div className="wrapper">
      <div className="date">{ result.date }</div>
      <div className="description">{ result.description }</div>
    </div>
  );
}

export default Result;

Result.propTypes = {
  result: PropTypes.objectOf({
    description: PropTypes.string.isRequired,
  }).isRequired,
};
