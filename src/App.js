import React, { useState, useEffect } from 'react';
import fetchData from './api';
import Counter from './components/Counter';
import User from './components/User'
import './App.css';

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

  const userData = userInfos.map((user, index) => {
    return <User key={index} fetchData={fetchData} userFirstName={user.name.first} userLastName={user.name.last} userPicture={user.picture.thumbnail} />
  })

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Playground</h1>
      </header>
      <main>
        <Counter count={count} setCount={setCount} />
        <br />
        {userData}
        <pre style={{ textAlign: "left" }}>
          {randomUserDataJSON}
        </pre>
      </main>
    </div>
  );
}

export default App;
