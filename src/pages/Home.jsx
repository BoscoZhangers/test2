import React from 'react';
import heroImg from '../assets/hero.svg'; // Changed from .png to .svg

export default function Home({ setPage }) {
  return (
    <div style={{ 
      maxWidth: '1200px', 
      margin: '0 auto', 
      padding: '80px 40px', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-between' 
    }}>
      
      {/* Left Column: Text */}
      <div style={{ flex: 1, paddingRight: '60px' }}>

        <h1 
          data-darwin-id="hero-heading"
          style={{ 
            fontSize: '4.5rem', 
            lineHeight: 1.1, 
            fontWeight: '900', 
            marginBottom: '24px', 
            letterSpacing: '-2px' 
          }}
        >
          Build faster. <br />
          <span style={{ color: '#ccc' }}>Scale better.</span>
        </h1>

        <p 
          data-darwin-id="hero-description"
          style={{ 
            fontSize: '1.25rem', 
            color: '#666', 
            lineHeight: 1.6, 
            marginBottom: '40px', 
            maxWidth: '500px' 
          }}
        >
          We simulate user traffic on your components so you can optimize your UI before you even launch. Data-driven design starts here.
        </p>

        <div style={{ display: 'flex', gap: '15px' }}>
          <button 
            data-darwin-id="btn-cta-primary"
            onClick={() => setPage('about')}
            style={{ 
              padding: '16px 32px', 
              backgroundColor: '#000', 
              color: 'white', 
              fontSize: '16px', 
              fontWeight: 'bold', 
              border: 'none', 
              borderRadius: '8px', 
              cursor: 'pointer',
              boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
            }}
          >
            Get Started
          </button>
          
          <button 
            data-darwin-id="btn-cta-secondary"
            style={{ 
              padding: '16px 32px', 
              backgroundColor: '#fff', 
              color: '#333', 
              fontSize: '16px', 
              fontWeight: 'bold', 
              border: '1px solid #e5e5e5', 
              borderRadius: '8px', 
              cursor: 'pointer' 
            }}
          >
            View Demo
          </button>
        </div>
      </div>

      {/* Right Column: IMAGE */}
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
        <div 
          data-darwin-id="hero-image-container"
          style={{
            width: '100%',
            // Simple shadow and rounding to make it look nice
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.2)'
          }}
        >
          {/* 2. USE THE IMAGE */}
          <img 
            src={heroImg} 
            alt="Dashboard Preview" 
            style={{ width: '100%', height: 'auto', display: 'block' }} 
          />
        </div>
      </div>

    </div>
  );
}