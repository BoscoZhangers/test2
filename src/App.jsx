import React, { useState } from 'react';
import DarwinTracker from './DarwinTracker';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';

export default function App() {
  const [activePage, setActivePage] = useState('home');

  return (
    <div style={{ 
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      color: '#333',
      backgroundColor: '#fff',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Initialize Darwin Tracker */}
      <DarwinTracker repoId="boscozhangers_test2" />

      {/* Navigation */}
      <Navbar setPage={setActivePage} activePage={activePage} />

      {/* Page Content */}
      <main style={{ flex: 1, position: 'relative' }}>
        {activePage === 'home' && <Home setPage={setActivePage} />}
        {activePage === 'about' && <About />}
      </main>

    </div>
  );
}