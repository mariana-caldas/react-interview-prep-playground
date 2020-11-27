import React from 'react';

export default function Counter({ count, setCount }) {
    return (
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

    );
}