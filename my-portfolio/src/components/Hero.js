import React from 'react';
import profileImg from '../image.png';

function Hero() {
  return (
    <section style={{
      backgroundColor: '#635bfc',
      color: '#fff',
      padding: '60px 20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: '40px'
    }}>
      {/* ዙሪያው የሚሽከረከረው የፎቶ ኮንቴነር */}
      <div className="spinning-border-container">
        <img 
          src={profileImg} 
          alt="Woinshet Teshale" 
        />
      </div>

      <div style={{ maxWidth: '450px' }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '10px' }}>Cross-Platform Web Developer</h2>
        <p style={{ fontSize: '1rem', lineHeight: '1.6', marginBottom: '20px', color: '#e0e7ff' }}>
          Computer Science graduate and Web Developer skilled in building scalable applications across multiple platforms.
        </p>
        <div style={{ display: 'flex', gap: '15px' }}>
          <a href="#projects" style={{
            backgroundColor: '#ffdc33',
            color: '#1e1b4b',
            padding: '12px 24px',
            borderRadius: '25px',
            textDecoration: 'none',
            fontWeight: 'bold'
          }}>
            View My Work
          </a>
          <a href="#contact" style={{
            border: '2px solid #fff',
            color: '#fff',
            padding: '12px 24px',
            borderRadius: '25px',
            textDecoration: 'none',
            fontWeight: 'bold'
          }}>
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;