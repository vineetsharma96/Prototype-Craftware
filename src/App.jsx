import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import WhyUs from './components/WhyUs';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import AIChat from './components/AIChat/AIChat';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState('');

  const handleSelectProduct = (productName) => {
    setSelectedProduct(productName);
  };

  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products onSelectProduct={handleSelectProduct} />
        <WhyUs />
        <ContactForm preselectedProduct={selectedProduct} />
      </main>
      <Footer />

      {/* Embedded Floating AI Customer Assistant */}
      <AIChat />
    </div>
  );
}