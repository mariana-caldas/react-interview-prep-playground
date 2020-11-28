import React, { useState, useEffect } from 'react';
import Counter from './components/Counter';
import './App.css';
import fetchData from './api';

function App() {
  const [count, setCount] = useState(0);
  const [userInfos, setUserInfos] = useState([]);
  const [randomUserDataJSON, setRandomUserDataJSON] = useState();

  useEffect(() => {
    fetchData().then(response => {
      setRandomUserDataJSON(JSON.stringify(response));
      setUserInfos(response.data.results);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Playground</h1>
      </header>
      <main>
        <Counter count={count} setCount={setCount} />
        <br />
        <h2>Fetching an API data with useEffect()</h2>
        <button onClick={() => { fetchData(); }}>Fetch Data</button>
        {
          userInfos.map((user, index) => {
            console.log("User: ", user);
            return <div key={index}>
              <p>{`${user.name.first} ${user.name.last}`}</p>
              <img src={user.picture.thumbnail} alt="User" />
            </div>

          })
        }
        <pre style={{ textAlign: "left" }}>
          {randomUserDataJSON}
        </pre>
      </main>
    </div>
  );
}

export default App;
