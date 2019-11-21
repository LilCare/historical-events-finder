import React, { useState } from 'react';
import Search from './Search';
import Paginate from './Paginate';

function App() {
  const [searchState, setSearch] = useState('');
  const [resultsState, setResults] = useState([]);
  const [pageCountState, setPageCountState] = useState(0);

  return (
    <div>
      <h1 id="title">
        Historical Fact Finder
      </h1>
      <Search
        searchState={searchState}
        setSearch={setSearch}
        setResults={setResults}
        setPageCountState={setPageCountState}
      />
      <Paginate
        pageCountState={pageCountState}
      />
    </div>
  );
}

export default App;
