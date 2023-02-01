
import Weather from "./Weather";
import React from 'react';

import "./App.css"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather defaultCity="Denver"/>
      </header>
    </div>
  );
}

export default App;
