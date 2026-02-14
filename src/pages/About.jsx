import React from 'react';

export default function About() {
  return (
    <div style={{ padding: '20px', background: '#222', borderRadius: '8px' }}>
      <h2>About Us</h2>
      <p>This page demonstrates that the Darwin Renderer can:</p>
      <ul style={{ textAlign: 'left', lineHeight: '1.6' }}>
        <li>Resolve relative imports (e.g., <code>./pages/About</code>)</li>
        <li>Render distinct component trees</li>
        <li>Maintain state when switching views</li>
      </ul>
    </div>
  );
}