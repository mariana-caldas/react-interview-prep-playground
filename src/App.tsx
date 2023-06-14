import React, { useState, useEffect } from "react";
import fetchData from "./api";
import Counter from "./components/Counter";
import User from "./components/User";
import "./App.css";

interface UserData {
  name: { first: string, last: string };
  picture: {
    thumbnail: string;
  }
}

function App(): JSX.Element {
  const [count, setCount] = useState<number>(0);
  const [nextPageNumber, setNextPageNumber] = useState<number>(1);
  const [userDataArr, setUserDataArr] = useState<UserData[]>([]);

  const fetchNextUser = (): void => {
    fetchData(nextPageNumber).then((response) => {
      if (!response) return;
      if (response.data === undefined) return;
      const newUserData = [...userDataArr, ...response.data.results];
      setUserDataArr(newUserData);
      setNextPageNumber(response.data.info.page + 1);
    });
  };

  useEffect(() => {
    fetchNextUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const userDataRendered = userDataArr.map((user, index: number) => {
    return (
      <User
        key={index}
        firstName={user.name.first}
        lastName={user.name.last}
        picture={user.picture.thumbnail}
      />
    );
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Playground</h1>
      </header>
      <main>
        <Counter count={count} setCount={setCount} />
        <br />
        <h2>Fetching an API data with useEffect()</h2>
        <button
          onClick={() => {
            fetchData(nextPageNumber);
          }}
        >
          Fetch Data
        </button>
        {userDataRendered}
        {/* <pre style={{ textAlign: "left" }}>
          {randomUserDataJSON}
        </pre> */}
        <br />
        <button
          onClick={() => {
            fetchNextUser();
          }}
        >
          Fetch Next User
        </button>
      </main>
    </div>
  );
}

export default App;
