import React from 'react';
import Result from './Result';

function Results({ resultsState }) {  // eslint-disable-line
  return (
    <div id="results">
      {resultsState.map((result, i) => (
        <Result
          key={i + result.date}  // eslint-disable-line
          result={result}
        />
      ))}
    </div>
  );
}

export default Results;
