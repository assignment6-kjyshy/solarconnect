import React from 'react'
import './App.css';
import Timer from './components/Timer';
import {Sort} from './components/Sort'

function App() {

  return (
    <div className="App">
      <header className="header"><h1>Sorting Machine</h1></header>
      <div className="main">
        
        <Timer country={"KR"} />
        <Sort />
        <Timer country={"US"} />
        
        </div>

    </div>
  );
}

export default App;
