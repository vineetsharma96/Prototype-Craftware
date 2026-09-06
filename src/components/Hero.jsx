import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="container hero animate-fade-in">
      <div className="hero-text">
        <span className="hero-badge">Handcrafted Precision</span>
        <h1 className="hero-title">Elevate Your Desk Setup to Masterpiece Level</h1>
        <p className="hero-description">
          Custom artisan wrist rests, coiled cables, and premium desk mats built to enhance ergonomic support and aesthetic elegance.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn btn-whatsapp">
            💬 Contact on WhatsApp
          </a>
          <a href="#products" className="btn btn-secondary">
            Explore Products
          </a>
        </div>
      </div>
      <div className="hero-image-wrapper">
        <img 
          src="https://images.unsplash.com/photo-1593062096033-9a26b09da705?auto=format&fit=crop&q=80&w=800" 
          alt="Artisanal Workstation Setup" 
          className="hero-image"
          loading="eager"
        />
      </div>
    </section>
  );
}