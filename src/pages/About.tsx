
import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="page-section">
        <div className="premium-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="inline-block py-1 px-3 border border-gold/50 text-gold text-xs uppercase tracking-widest">
                Our Heritage
              </span>
              <h1 className="font-playfair text-4xl md:text-5xl font-bold">
                A Legacy of <span className="gold-text">Excellence</span>
              </h1>
              <p className="text-lg text-neutral-charcoal/80 leading-relaxed">
                For over three decades, Opulent Gemstone has been the trusted advisor to royal families, distinguished collectors, and connoisseurs seeking the world's most exceptional gemstones and jewelry pieces.
              </p>
              <p className="text-lg text-neutral-charcoal/80 leading-relaxed">
                Our unwavering commitment to discretion, authenticity, and excellence has established us as the preeminent procurement specialists in the world of rare gemstones.
              </p>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/5] rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1596944924616-7b38e4fc46a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1087&q=80" 
                  alt="Exceptional gems" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1613843031956-31eaf90b2059?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                  alt="Diamond close-up" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="page-section bg-neutral-ivory/50">
        <div className="premium-container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block py-1 px-3 border border-gold/50 text-gold text-xs uppercase tracking-widest mb-4">
                Our Story
              </span>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold">
                Three Generations of Expertise
              </h2>
            </div>
            
            <div className="space-y-8">
              <p className="text-lg leading-relaxed">
                Founded in 1987 by renowned gemologist Alexander Harrington, Opulent Gemstone began as a discreet advisory service for European aristocracy seeking exceptional gemstones. Alexander's unparalleled expertise and extensive network throughout Asia, Africa, and South America allowed him to source stones of extraordinary quality and provenance.
              </p>
              
              <p className="text-lg leading-relaxed">
                In 2005, Alexander's daughter, Elizabeth Harrington, expanded the firm's presence into the Middle East and Asia, establishing exclusive relationships with royal families and prominent collectors. Under her guidance, Opulent Gemstone developed its renowned authentication process, setting new standards for gemstone verification.
              </p>
              
              <p className="text-lg leading-relaxed">
                Today, led by third-generation gemologist James Harrington, Opulent Gemstone continues its legacy of excellence while embracing innovative approaches to gemstone procurement. Our team of specialists travels the world to source the most exceptional stones, creating bespoke acquisition experiences for our distinguished clientele.
              </p>
              
              <blockquote className="border-l-4 border-gold pl-6 py-2 italic font-playfair text-xl my-8">
                "We do not merely procure gemstones; we curate legacies that transcend generations."
                <footer className="mt-2 text-sm font-normal not-italic">
                  — James Harrington, Principal Gemologist
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Services */}
      <section className="page-section">
        <div className="premium-container">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 border border-gold/50 text-gold text-xs uppercase tracking-widest mb-4">
              Our Services
            </span>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold">
              Exceptional Expertise for Discerning Clients
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Private Procurement',
                description: 'Discreet acquisition of exceptional gemstones and rare jewelry pieces tailored to your specific requirements.',
                icon: '💎'
              },
              {
                title: 'Authentication & Certification',
                description: 'Rigorous verification processes and comprehensive certification conducted by world-renowned gemologists.',
                icon: '📜'
              },
              {
                title: 'Collection Management',
                description: 'Expert guidance on building, maintaining, and enhancing your private collection of rare gemstones.',
                icon: '🏛️'
              },
              {
                title: 'Bespoke Design',
                description: 'Collaboration with master craftsmen to create unique jewelry pieces showcasing extraordinary gemstones.',
                icon: '✨'
              },
              {
                title: 'Legacy Planning',
                description: 'Strategic advice on preserving and transitioning gemstone collections across generations.',
                icon: '🔒'
              },
              {
                title: 'Private Viewings',
                description: 'Exclusive opportunities to view and acquire newly sourced exceptional gemstones before market availability.',
                icon: '👁️'
              }
            ].map((service, index) => (
              <div key={index} className="glass-card rounded-lg p-8 h-full transform hover:-translate-y-1 transition-transform duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="font-playfair text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-neutral-charcoal/80">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="page-section bg-gradient-to-r from-neutral-charcoal to-neutral-charcoal/90 text-white">
        <div className="premium-container text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
            Experience Our <span className="gold-text">Unparalleled Expertise</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Contact our specialists to arrange a private consultation and discover how we can serve your unique requirements.
          </p>
          <Link to="/contact" className="btn-primary">
            Request Private Consultation
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default About;
