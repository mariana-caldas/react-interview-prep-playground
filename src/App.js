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
    return response;
  } catch (error) {
    // handle error
    console.log(error);
  }
}

function App() {
  const [count, setCount] = useState(0);
  const [userInfos, setUserInfos] = useState([]);
  const [randomUserDataJSON, setRandomUserDataJSON] = useState('');

  //Why then is here and not inside fetchData function above?
  useEffect(() => {
    fetchData().then(response => {
      setRandomUserDataJSON(JSON.stringify(response) || 'No user found');
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
              <img src={user.picture.thumbnail} />
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
