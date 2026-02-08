import React from 'react';
import DarwinTracker from './DarwinTracker'; 

export default function App() {
  const containerStyle = {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    width: '100vw',
    minHeight: '100vh',
    margin: 0,
    padding: 0,
    backgroundColor: '#ffffff',
    color: '#1a1a1a',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflowX: 'hidden'
  };

  const navStyle = {
    width: '100%',
    maxWidth: '1200px',
    height: '72px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 24px',
    boxSizing: 'border-box',
    borderBottom: '1px solid #f0f0f0'
  };

  const heroContainerStyle = {
    width: '100%',
    maxWidth: '1200px',
    padding: '80px 24px 40px 24px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    boxSizing: 'border-box'
  };

  const heroTextStyle = {
    fontSize: 'clamp(3rem, 8vw, 5rem)',
    fontWeight: '800',
    letterSpacing: '-0.04em',
    lineHeight: '1.1',
    margin: '0 0 24px 0',
    color: '#000'
  };

  const descriptionStyle = {
    fontSize: '1.15rem',
    lineHeight: '1.6',
    color: '#666',
    maxWidth: '540px',
    margin: '0 0 32px 0'
  };

  const primaryBtnStyle = {
    padding: '14px 28px',
    backgroundColor: '#000',
    borderRadius: '10px',
    color: '#fff',
    fontSize: '1rem',
    fontWeight: '600',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
  };

  const secondaryBtnStyle = {
    marginTop: '48px',
    padding: '16px 36px',
    backgroundColor: '#1bb556',
    borderRadius: '12px',
    color: 'white',
    fontSize: '1.1rem',
    fontWeight: '600',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 10px 15px -3px rgba(27, 181, 86, 0.3)'
  };

  return (
    <div style={containerStyle}>
      <DarwinTracker repoId="boscozhangers_test2" />

      {/* Navbar - Slim and professional */}
      <nav data-darwin-id="nav-main" style={navStyle}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: '800', letterSpacing: '-0.02em', margin: 0 }}>Startup.io</h1>
        <div style={{ display: 'flex', gap: '32px', fontSize: '0.9rem', fontWeight: '500', color: '#666' }}>
          <span>Product</span>
          <span>Features</span>
          <span>Pricing</span>
        </div>
      </nav>

      {/* Hero Content - Focused in the upper half */}
      <header style={heroContainerStyle}>
        <h1 data-darwin-id="hero-text" style={heroTextStyle}>
          Build Faster.
        </h1>

        <div data-darwin-id="description" style={descriptionStyle}>
          Optimize your web components with real-time feedback loops. We analyze simulated user interactions to help you make data-driven design decisions.
        </div>

        <button data-darwin-id="btn-cta" style={primaryBtnStyle}>
          Get Started
        </button>

        <button data-darwin-id="btn-cta-2" style={secondaryBtnStyle}>
          Take the change today
        </button>
      </header>
    </div>
  );
}