import React from 'react';
import logo from './logo.svg';
import ColorGrid from './ColorGrid'
import './App.css';

function App() {
  return (
    <div className="App">
      <ColorGrid numberOfCells={20}/>
    </div>
  );
}

export default App;
