import React from 'react'
import './App.css';
import Timer from './components/Timer';
import InputNumbers from './components/InputNumbers';
import SortResult from './components/SortResult';

function App() {

  return (
    <div className="App">
      <header className="header"><h1>Sorting Machine</h1></header>
      <div className="main">
        
        <Timer country={"KR"} />
        <InputNumbers />
        <SortResult />
        <Timer country={"US"} />
        
        </div>

    </div>
  );
}

export default App;
