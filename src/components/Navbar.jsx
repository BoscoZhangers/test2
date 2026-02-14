import React from 'react';

export default function Navbar({ setPage }) {
  const style = { padding: '10px', background: '#333', color: '#fff', marginBottom: '20px' };
  const btnStyle = { marginRight: '10px', cursor: 'pointer', background: '#555', border: 'none', color: '#fff', padding: '5px 10px' };
  
  return (
    <nav style={style} data-darwin-id="navbar">
      <h3 style={{display:'inline-block', marginRight:'20px'}}>DarwinTest</h3>
      <button style={btnStyle} onClick={() => setPage('home')}>Home</button>
      <button style={btnStyle} onClick={() => setPage('about')}>About</button>
    </nav>
  );
}