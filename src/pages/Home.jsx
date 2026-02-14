import React from 'react';

export default function Home() {
  return (
    <div style={{ padding: '20px' }}>
      <h1 data-darwin-id="hero-text">Welcome Home</h1>
      <p>This is the home page component.</p>
      <button data-darwin-id="cta-btn" style={{ padding: '10px 20px', fontSize: '16px', background: 'blue', color: 'white' }}>
        Click Me
      </button>
    </div>
  );
}