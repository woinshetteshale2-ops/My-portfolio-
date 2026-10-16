import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav style={{
      backgroundColor: '#1e1b4b',
      color: '#fff',
      padding: '12px 24px',
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 1000,
      boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
      boxSizing: 'border-box'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative'
      }}>
        {/* ስምሽ */}
        <h2 style={{ fontSize: '1.3rem', margin: 0, color: '#ffdc33' }}>
          Woinshet Teshale
        </h2>

        {/* Menu Button */}
        <div>
          <button 
            onClick={toggleDropdown}
            style={{
              backgroundColor: '#ffdc33',
              color: '#1e1b4b',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '20px',
              fontWeight: 'bold',
              fontSize: '0.95rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            Menu {isOpen ? '▲' : '▼'}
          </button>

          {/* በቀኝ በኩል ከ Menu በተኑ ስር ብቻ የሚወርደው ሳጥን */}
          {isOpen && (
            <div style={{
              position: 'absolute',
              right: 0,
              top: '45px',
              backgroundColor: '#2e2a72',
              borderRadius: '10px',
              padding: '8px 0',
              boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
              width: '160px',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <a 
                href="#about" 
                onClick={() => setIsOpen(false)}
                style={dropdownLinkStyle}
              >
                About Me
              </a>
              <a 
                href="#projects" 
                onClick={() => setIsOpen(false)}
                style={dropdownLinkStyle}
              >
                My Projects
              </a>
              <a 
                href="#contact" 
                onClick={() => setIsOpen(false)}
                style={dropdownLinkStyle}
              >
                Contact Me
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

const dropdownLinkStyle = {
  color: '#ffffff',
  textDecoration: 'none',
  padding: '10px 15px',
  fontSize: '0.95rem',
  fontWeight: '500',
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  display: 'block'
};

export default Navbar;