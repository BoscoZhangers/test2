import React from 'react';

export default function About() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '80px 20px', textAlign: 'center' }}>
      <h2 data-darwin-id="about-heading" style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '20px' }}>
        About Us
      </h2>
      <p data-darwin-id="about-text" style={{ fontSize: '1.2rem', color: '#666', lineHeight: 1.8 }}>
        Darwin allows developers to visualize user interaction heatmaps in a 3D simulated environment.
        Simply drag elements from this live preview into your tracker to start gathering data.
      </p>
      
      <div style={{ marginTop: '50px', padding: '40px', background: '#f9f9f9', borderRadius: '16px' }}>
        <h3 style={{ marginBottom: '20px' }}>Why use Darwin?</h3>
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', justifyContent: 'center', gap: '40px' }}>
          <li data-darwin-id="feature-1">🎯 <strong>Precision Tracking</strong></li>
          <li data-darwin-id="feature-2">🤖 <strong>AI Simulation</strong></li>
          <li data-darwin-id="feature-3">📊 <strong>Real-time Data</strong></li>
        </ul>
      </div>
    </div>
  );
}