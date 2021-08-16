import './App.css';
import Timer from './components/Timer';

function App() {
  return (
    <div className="App">
      <h1>Sorting Machine</h1>
      <Timer country={"KR"} />
      <Timer country={"US"} />
    </div>
  );
}

export default App;
