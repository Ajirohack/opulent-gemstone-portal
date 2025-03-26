
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [location]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="premium-container flex items-center justify-between">
        <NavLink to="/" className="flex items-center">
          <span className="font-playfair text-2xl font-bold gold-text tracking-tight">
            Opulent Gemstone
          </span>
        </NavLink>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink to="/" className={({isActive}) => 
            `navlink ${isActive ? 'active' : ''}`
          }>
            Home
          </NavLink>
          <NavLink to="/about" className={({isActive}) => 
            `navlink ${isActive ? 'active' : ''}`
          }>
            About
          </NavLink>
          <NavLink to="/certificate" className={({isActive}) => 
            `navlink ${isActive ? 'active' : ''}`
          }>
            Certificate
          </NavLink>
          <NavLink to="/contact" className={({isActive}) => 
            `navlink ${isActive ? 'active' : ''}`
          }>
            Contact
          </NavLink>
          <NavLink to="/client-portal" className="btn-primary">
            Client Portal
          </NavLink>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="fixed inset-0 top-16 bg-white/95 backdrop-blur-lg z-40 md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8 text-lg">
            <NavLink to="/" className={({isActive}) => 
              `navlink ${isActive ? 'active' : ''}`
            }>
              Home
            </NavLink>
            <NavLink to="/about" className={({isActive}) => 
              `navlink ${isActive ? 'active' : ''}`
            }>
              About
            </NavLink>
            <NavLink to="/certificate" className={({isActive}) => 
              `navlink ${isActive ? 'active' : ''}`
            }>
              Certificate
            </NavLink>
            <NavLink to="/contact" className={({isActive}) => 
              `navlink ${isActive ? 'active' : ''}`
            }>
              Contact
            </NavLink>
            <NavLink to="/client-portal" className="btn-primary mt-4">
              Client Portal
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
