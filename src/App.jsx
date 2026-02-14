import React, { useState } from 'react';
import DarwinTracker from './DarwinTracker';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';

export default function App() {
  const [page, setPage] = useState('home');

  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      <DarwinTracker repoId="boscozhangers_test2" />
      
      <Navbar setPage={setPage} />
      
      {page === 'home' && <Home />}
      {page === 'about' && <About />}
    </div>
  );
}