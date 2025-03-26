
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Instagram, Facebook, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-neutral-charcoal text-white py-12">
      <div className="premium-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-playfair text-xl font-semibold gold-text">Opulent Gemstone</h3>
            <p className="text-sm text-neutral-300 max-w-xs">
              Exclusive procurement of rare and exquisite gemstones and jewelry for discerning collectors and connoisseurs.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-playfair text-lg font-medium">Quick Links</h4>
            <ul className="space-y-2">
              <li><NavLink to="/" className="text-sm hover:text-gold transition-colors">Home</NavLink></li>
              <li><NavLink to="/about" className="text-sm hover:text-gold transition-colors">About</NavLink></li>
              <li><NavLink to="/certificate" className="text-sm hover:text-gold transition-colors">Certificate</NavLink></li>
              <li><NavLink to="/contact" className="text-sm hover:text-gold transition-colors">Contact</NavLink></li>
            </ul>
          </div>
          
          {/* Client Portal */}
          <div className="space-y-4">
            <h4 className="font-playfair text-lg font-medium">Private Access</h4>
            <ul className="space-y-2">
              <li><NavLink to="/client-portal" className="text-sm hover:text-gold transition-colors">Client Portal</NavLink></li>
              <li><NavLink to="/privacy-policy" className="text-sm hover:text-gold transition-colors">Privacy Policy</NavLink></li>
              <li><NavLink to="/terms" className="text-sm hover:text-gold transition-colors">Terms of Service</NavLink></li>
            </ul>
          </div>
          
          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="font-playfair text-lg font-medium">Connect</h4>
            <p className="text-sm text-neutral-300">By appointment only</p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-300 hover:text-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-neutral-300 hover:text-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-neutral-300 hover:text-gold transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:contact@opulentgemstone.com" className="text-neutral-300 hover:text-gold transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-neutral-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-neutral-400">
            &copy; {new Date().getFullYear()} Opulent Gemstone. All rights reserved.
          </p>
          <p className="text-xs text-neutral-400 mt-2 md:mt-0">
            Exclusively by invitation only
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
