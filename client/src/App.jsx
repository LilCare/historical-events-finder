import React, { useState } from 'react';
import Search from './Search.jsx';

function App() {
  const [termState, setTerm] = useState('');
  const [resultsState, setResults] = useState([]);

  

  return (
    <div>
      <h1 id="title">
        Historical Fact Finder
      </h1>

    </div>
  );
}

export default App;
