App.jsx
import React from 'react';

export default function App() {
  return (
    <div>
      <button>Click Me</button>
    </div>
  )
}

export default function App() {
  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden', backgroundColor: 'white' }}>
      
      {/* The Parser looks for <nav> tags */}
      <nav style={{ position: 'absolute', left: 13, top: -4, width: 450, height: 64, backgroundColor: '#ffffff', display: 'flex', alignItems: 'center', padding: '0 24px', boxSizing: 'border-box' }}>
        <h1 style={{ fontWeight: 'bold', margin: 0 }}>Startup.io</h1>
      </nav>

      {/* The Parser looks for <h1> tags */}
      <h1 style={{ position: 'absolute', left: 34, top: 163, width: 350, height: 100, fontSize: '3.5rem', color: '#000', margin: 0, lineHeight: 1 }}>
        Build Slower.
      </h1>

      {/* The Parser looks for <button> tags */}
      <button style={{ position: 'absolute', left: 34, top: 256, width: 140, height: 48, backgroundColor: '#000', borderRadius: '8px', color: 'white', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
        Get Started
      </button>

    </div>
  );
}
