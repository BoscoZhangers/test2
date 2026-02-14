import React from 'react';

export default function Navbar({ activePage, setPage }) {
  const btnStyle = (page) => ({
    background: activePage === page ? '#646cff' : 'transparent',
    color: activePage === page ? 'white' : '#ccc',
    border: '1px solid #646cff',
    padding: '8px 16px',
    cursor: 'pointer',
    borderRadius: '4px'
  });

  return (
    <nav style={{ 
      display: 'flex', 
      gap: '10px', 
      padding: '15px', 
      background: '#1a1a1a', 
      marginBottom: '20px',
      borderBottom: '1px solid #333'
    }}>
      <button style={btnStyle('home')} onClick={() => setPage('home')}>Home</button>
      <button style={btnStyle('about')} onClick={() => setPage('about')}>About</button>
      <button style={btnStyle('contact')} onClick={() => setPage('contact')}>Contact</button>
    </nav>
  );
}