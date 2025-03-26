
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Shield, Lock } from 'lucide-react';

const Certificate = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="page-section">
        <div className="premium-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block py-1 px-3 border border-gold/50 text-gold text-xs uppercase tracking-widest mb-4">
              Uncompromising Standards
            </span>
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
              Certification & <span className="gold-text">Authentication</span>
            </h1>
            <p className="text-lg text-neutral-charcoal/80">
              Every gemstone we procure undergoes a rigorous authentication and certification process, ensuring absolute confidence in your acquisition.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            <div className="col-span-1 md:col-span-2 order-2 md:order-1">
              <div className="space-y-6">
                <h2 className="font-playfair text-2xl md:text-3xl font-semibold">
                  The Highest Standards of Verification
                </h2>
                <p className="text-lg text-neutral-charcoal/80 leading-relaxed">
                  Our certification process combines advanced gemological analysis with meticulous provenance research, creating a comprehensive authentication record for each exceptional stone.
                </p>
                <p className="text-lg text-neutral-charcoal/80 leading-relaxed">
                  Working with internationally recognized laboratories and independent experts, we ensure that every gemstone meets our exacting standards for quality, authenticity, and ethical sourcing.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                  {[
                    'Comprehensive gemological analysis',
                    'Origin verification',
                    'Treatment disclosure',
                    'Historical provenance research',
                    'Independent laboratory certification',
                    'Proprietary authentication documentation'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <span className="h-6 w-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <span className="h-2 w-2 rounded-full bg-gold" />
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <div className="glass-card rounded-lg p-6 md:p-8">
                <img 
                  src="https://images.unsplash.com/photo-1606046604972-77cc76aee944?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Gemstone certification" 
                  className="w-full h-auto rounded-lg mb-6"
                />
                <div className="space-y-4">
                  <h3 className="font-playfair text-xl font-medium">
                    Certificate of Authenticity
                  </h3>
                  <p className="text-neutral-charcoal/80 text-sm">
                    Each exceptional gemstone is accompanied by our proprietary Certificate of Authenticity, documenting its unique characteristics and provenance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Certification Process */}
      <section className="page-section bg-neutral-ivory/50">
        <div className="premium-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block py-1 px-3 border border-gold/50 text-gold text-xs uppercase tracking-widest mb-4">
              Our Process
            </span>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold">
              The Opulent Gemstone Certification Protocol
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FileText size={32} className="text-gold" />,
                title: 'Comprehensive Documentation',
                description: 'Each gemstone receives detailed documentation of its physical characteristics, optical properties, and distinctive features, creating a unique identity profile.'
              },
              {
                icon: <Shield size={32} className="text-gold" />,
                title: 'Independent Verification',
                description: 'We collaborate with world-renowned gemological laboratories to provide independent verification of each stone's authenticity and quality.'
              },
              {
                icon: <Lock size={32} className="text-gold" />,
                title: 'Secure Provenance Record',
                description: 'Our proprietary blockchain-based registry securely documents the ownership history and provenance of each exceptional gemstone.'
              }
            ].map((item, index) => (
              <div key={index} className="glass-card rounded-lg p-8 h-full">
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="font-playfair text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-neutral-charcoal/80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="page-section">
        <div className="premium-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block py-1 px-3 border border-gold/50 text-gold text-xs uppercase tracking-widest mb-4">
              Client Testimonials
            </span>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold">
              Trust & Confidence
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote: "Their authentication process gave me absolute confidence in the provenance and value of my rare blue diamond acquisition.",
                author: "Private Collector",
                location: "London, UK"
              },
              {
                quote: "The detailed certification and supporting documentation provided by Opulent Gemstone exceeds any standard I have encountered in the industry.",
                author: "Museum Curator",
                location: "New York, USA"
              },
              {
                quote: "Their meticulous approach to verification and certification reflects a commitment to excellence that aligns perfectly with our family's values.",
                author: "Royal Family Member",
                location: "Middle East"
              },
              {
                quote: "The transparent certification process and ethical sourcing verification were instrumental in our decision to establish a long-term relationship.",
                author: "Foundation Director",
                location: "Geneva, Switzerland"
              }
            ].map((testimonial, index) => (
              <div key={index} className="glass-card rounded-lg p-8">
                <blockquote className="font-playfair text-lg italic mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex flex-col">
                  <span className="font-medium">{testimonial.author}</span>
                  <span className="text-sm text-neutral-charcoal/70">{testimonial.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="page-section bg-gradient-to-r from-neutral-charcoal to-neutral-charcoal/90 text-white">
        <div className="premium-container text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
            Experience Our <span className="gold-text">Unparalleled Standards</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Contact our specialists to learn more about our certification process and how it ensures absolute confidence in your acquisitions.
          </p>
          <Link to="/contact" className="btn-primary">
            Request Private Consultation
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Certificate;
