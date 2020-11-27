import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Playground</h1>
      </header>
      <main>
        <div className="counter">
          <h2>Creating a counter with useState():</h2>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(prev => prev + 1)}>
            Click to + 1
          </button>
          <button onClick={() => setCount(prev => prev - 1)}>
            Click to - 1
          </button>
          <button onClick={() => setCount(0)}>
            Reset
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
