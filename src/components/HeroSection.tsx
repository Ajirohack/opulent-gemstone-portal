
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const heroBgRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroBgRef.current) return;
      
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth) * 10;
      const yPos = (clientY / window.innerHeight) * 10;
      
      heroBgRef.current.style.transform = `translate(${-xPos}px, ${-yPos}px) scale(1.05)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div 
        ref={heroBgRef}
        className="absolute inset-0 transition-transform duration-700 ease-out"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1580828343064-fde4fc206bc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Content */}
      <div className="premium-container relative z-10 pt-20">
        <div className="max-w-3xl text-white space-y-6">
          <span className="inline-block py-1 px-3 border border-gold/50 text-gold text-xs uppercase tracking-widest mb-4 opacity-0 animate-fade-in">
            By Invitation Only
          </span>
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold leading-tight opacity-0 animate-fade-in animate-delay-100">
            Exceptional Gemstones for <span className="gold-text">Extraordinary Individuals</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl opacity-0 animate-fade-in animate-delay-200">
            Discreet procurement of the world's most exquisite and rare gemstones for discerning collectors, royal families, and distinguished clientele.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in animate-delay-300">
            <Link to="/contact" className="btn-primary">
              Request Private Consultation
              <ArrowRight size={16} className="ml-2" />
            </Link>
            <Link to="/about" className="btn-outline">
              Discover Our Heritage
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
