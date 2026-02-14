import React, { useState } from 'react';
import reactLogo from '../assets/react.svg';

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <h2>Darwin Home Page</h2>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <p>This is the main landing page of the test application.</p>
      <button onClick={() => setCount((count) => count + 1)}>
        Interactions: {count}
      </button>
    </div>
  );
}