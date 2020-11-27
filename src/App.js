import React, { useState, UseEffect, useEffect } from 'react';
import Counter from './components/Counter';
import './App.css';
import axios from 'axios';

//https://randomuser.me/api

//why  VS suggest to make this function async?

const fetchData = async () => {
  try {
    const response = await axios.get('https://randomuser.me/api');
    // handle success
    console.log(response);
    return response;
  } catch (error) {
    // handle error
    console.log(error);
    return error;
  }

}

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Playground</h1>
      </header>
      <main>
        <Counter count={count} setCount={setCount} />
        <hr />
        <button onClick={() => { fetchData(); }}>Fetch Data</button>
      </main>
    </div>
  );
}



export default App;
