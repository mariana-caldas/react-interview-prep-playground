import React, { useState } from 'react';
import Counter from './components/Counter';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Playground</h1>
      </header>
      <main>
        <Counter count={count} setCount={setCount} />
      </main>
    </div>
  );
}

export default App;
