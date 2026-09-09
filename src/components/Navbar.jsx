import React, { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <a href="#" className="logo">
          CraftWave<span>Studio</span>
        </a>

        <button 
          className="hamburger" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="#products" onClick={() => setMenuOpen(false)}>Products</a></li>
          <li><a href="#why-us" onClick={() => setMenuOpen(false)}>Why Us</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
          <li>
            <a 
              href="#contact" 
              className="btn btn-whatsapp" 
              style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
              onClick={() => setMenuOpen(false)}
            >
              💬 WhatsApp Query
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}