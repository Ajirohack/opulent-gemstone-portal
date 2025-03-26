
import React, { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import ClientPortal from '@/components/ClientPortal';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <HeroSection />
      
      {/* Featured Section */}
      <section className="page-section">
        <div className="premium-container">
          <div className="max-w-xl mx-auto text-center mb-16">
            <span className="inline-block py-1 px-3 border border-gold/50 text-gold text-xs uppercase tracking-widest mb-4">
              Unparalleled Expertise
            </span>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
              Discover Exceptional Gemstones
            </h2>
            <p className="text-lg text-neutral-charcoal/80">
              For over three decades, we have provided discreet procurement services for the world's most discerning collectors.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Royal Heritage',
                description: 'Trusted by royal families across Europe, Asia, and the Middle East for generations.',
                image: 'https://images.unsplash.com/photo-1620118439782-a556bd5407e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
              },
              {
                title: 'Rare Acquisitions',
                description: 'Access to the world's most exclusive gemstones and historically significant jewelry pieces.',
                image: 'https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
              },
              {
                title: 'Expert Authentication',
                description: 'Rigorous certification and provenance verification by world-renowned gemologists.',
                image: 'https://images.unsplash.com/photo-1633810203760-c0ddb4cf45f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
              }
            ].map((item, index) => (
              <div key={index} className="group">
                <div className="overflow-hidden rounded-lg mb-6">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-64 object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <h3 className="font-playfair text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-neutral-charcoal/80 mb-4">{item.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/about" className="btn-outline">
              Explore Our Heritage
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonial */}
      <section className="page-section bg-neutral-charcoal text-white">
        <div className="premium-container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block py-1 px-3 border border-gold/50 text-gold text-xs uppercase tracking-widest mb-6">
              Client Appreciation
            </span>
            <blockquote className="font-playfair text-2xl md:text-3xl italic mb-8">
              "Their discretion and expertise in procuring rare gemstones is unmatched. Opulent Gemstone has been our trusted advisor for three generations."
            </blockquote>
            <div className="flex flex-col items-center">
              <div className="w-16 h-0.5 bg-gold mb-4"></div>
              <p className="text-gold font-medium">Royal Family Representative</p>
              <p className="text-sm text-gray-400">Middle East</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Client Portal Section */}
      <ClientPortal />
      
      {/* Call to Action */}
      <section className="page-section bg-gradient-to-r from-neutral-charcoal to-neutral-charcoal/90 text-white">
        <div className="premium-container text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
            Begin Your <span className="gold-text">Exclusive Journey</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Contact our specialists to arrange a private consultation and discover the exceptional world of rare gemstones.
          </p>
          <Link to="/contact" className="btn-primary">
            Request Private Consultation
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Index;
