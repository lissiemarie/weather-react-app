import logo from './logo.svg';
import Weather from "./Weather";
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello from React!</h1>
        <Weather />
      </header>
    </div>
  );
}

export default App;
