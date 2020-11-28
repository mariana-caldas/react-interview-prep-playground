import React, { useState, useEffect } from 'react';
import Counter from './components/Counter';
import './App.css';
import axios from 'axios';

//https://randomuser.me/api

//why VS suggests to make this function async?
const fetchData = async () => {
  try {
    const response = await axios.get('https://randomuser.me/api');
    // handle success
    console.log(response);
    return JSON.stringify(response, null, 1);
  } catch (error) {
    // handle error
    console.log(error);
  }

}

function App() {
  const [count, setCount] = useState(0);
  const [randomUserDataJSON, setRandomUserDataJSON] = useState('');

  //Why then is here and not inside fetchData function above?
  useEffect(() => {
    fetchData().then(response => {
      setRandomUserDataJSON(response || 'No user found');
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Playground</h1>
      </header>
      <main>
        <Counter count={count} setCount={setCount} />
        <hr />
        <button onClick={() => { fetchData(); }}>Fetch Data</button>
        <pre style={{ textAlign: "left" }}>
          {randomUserDataJSON}
        </pre>
      </main>
    </div>
  );
}



export default App;
