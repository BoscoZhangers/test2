import React, { useState } from 'react';
import './App.css';
import DarwinTracker from './DarwinTracker';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  const [activePage, setActivePage] = useState('home');

  return (
    <DarwinTracker appId="test-multi-file-v1" debug={true}>
      <div className="app-container">
        <Navbar activePage={activePage} setPage={setActivePage} />
        
        <main style={{ padding: '0 2rem' }}>
          {activePage === 'home' && <Home />}
          {activePage === 'about' && <About />}
          {activePage === 'contact' && (
            <div style={{ padding: '40px' }}>
              <h2>Contact Page</h2>
              <input type="text" placeholder="Your email..." style={{ padding: '10px' }} />
              <button style={{ marginLeft: '10px' }}>Send</button>
            </div>
          )}
        </main>
      </div>
    </DarwinTracker>
  );
}

export default App;