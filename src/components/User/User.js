import React from 'react';

export default function User({ fetchData, userFirstName, userLastName, userPicture }) {
    return (
        <div>
            <h2>Fetching an API data with useEffect()</h2>
            <button onClick={() => { fetchData() }}>Fetch Data</button>
            <p>{`${userFirstName} ${userLastName}`}</p>
            <img src={userPicture} alt="User" />
        </div>
    )
}