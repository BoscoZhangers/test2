import React from 'react';

export default function Navbar({ setPage, activePage }) {
  const navStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 40px',
    height: '80px',
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #eaeaea',
    position: 'sticky',
    top: 0,
    zIndex: 100
  };

  const logoStyle = {
    fontSize: '24px',
    fontWeight: '800',
    background: 'linear-gradient(45deg, #111, #444)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    cursor: 'pointer'
  };

  const linkStyle = (page) => ({
    marginLeft: '30px',
    textDecoration: 'none',
    color: activePage === page ? '#000' : '#888',
    fontWeight: activePage === page ? '600' : '400',
    cursor: 'pointer',
    transition: 'color 0.2s'
  });

  return (
    <nav style={navStyle} data-darwin-id="navbar-container">
      <div 
        data-darwin-id="nav-logo" 
        style={logoStyle} 
        onClick={() => setPage('home')}
      >
        Startup.io
      </div>
      
      <div style={{ display: 'flex' }}>
        <a 
          data-darwin-id="nav-link-home" 
          style={linkStyle('home')} 
          onClick={() => setPage('home')}
        >
          Home
        </a>
        <a 
          data-darwin-id="nav-link-about" 
          style={linkStyle('about')} 
          onClick={() => setPage('about')}
        >
          About
        </a>
        <button 
          data-darwin-id="nav-btn-login"
          style={{
            marginLeft: '30px',
            padding: '8px 20px',
            backgroundColor: '#111',
            color: 'white',
            border: 'none',
            borderRadius: '20px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          Login
        </button>
      </div>
    </nav>
  );
}