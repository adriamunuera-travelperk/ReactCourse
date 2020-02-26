import React from 'react';
import logo from './logo.svg';
import './App.css';
import LightsOut from './LightsOut'

function App() {
  return (
    <div className="App">
      <LightsOut n={4} p={0.8}/>
    </div>
  );
}

export default App;
