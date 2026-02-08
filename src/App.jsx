import React from 'react';
import DarwinTracker from './DarwinTracker'; // <--- THIS IS REQUIRED FOR TRACKING

export default function App() {
  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden', backgroundColor: 'white' }}>
      
      {/* 1. INITIALIZE THE TRACKER */}
      {/* Replace 'BoscoZhangers_darwin-test-site' with your unique repo ID */}
      <DarwinTracker repoId="BoscoZhangers_darwin-test-site" />

      {/* 2. ADD 'data-darwin-id' TO ELEMENTS YOU WANT TO TRACK */}
      
      {/* Navbar */}
      <div 
        data-darwin-id="nav-main" 
        style={{ position: 'absolute', left: 0, top: 0, width: 450, height: 64, backgroundColor: '#ffffff', display: 'flex', alignItems: 'center', paddingLeft: 0, paddingRight: 0, paddingLeft: 24, paddingRight: 24, boxSizing: 'border-box' }}
      >
        <h1 style={{ fontWeight: 'bold', margin: 0 }}>Startup.io</h1>
      </div>

      {/* Hero Text */}
      <h1 
        data-darwin-id="hero-text"
        style={{ position: 'absolute', left: 40, top: 140, width: 350, height: 100, fontSize: '3.5rem', color: '#000', margin: 0, lineHeight: 1 }}
      >
        Build Faster.
      </h1>

      {/* CTA Button */}
      <button 
        data-darwin-id="btn-cta"
        style={{ position: 'absolute', left: 40, top: 240, width: 140, height: 48, backgroundColor: '#000', borderRadius: '8px', color: 'white', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}
      >
        Get Started
      </button>
      
      <h5
        data-darwin-id="description"
        style={{ position: 'absolute', left: 40, top: 300, width: 140, height: 48, backgroundColor: '#ffffff', borderRadius: '8px', color: 'black', border: 'none', cursor: 'pointer' }}
      >
        Some small details to describe what this project is about. We make changes to the properties of web components to see how simulated users will react.
      </h5>

      <button
        data-darwin-id="btn-cta-2"
        style={{ position: 'absolute', left: 120, top: 470, width: 240, height: 60, backgroundColor: '#1bb556', borderRadius: '12px', color: 'white', fontWeight: 'bold', border: 'none', cursor: 'pointer'}}
      >
        Take the change today.
      </button>

    </div>
  );
}
