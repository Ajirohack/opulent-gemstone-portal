
import React, { useEffect } from 'react';
import ContactForm from '@/components/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
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
              Connect With Us
            </span>
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
              Request a <span className="gold-text">Private Consultation</span>
            </h1>
            <p className="text-lg text-neutral-charcoal/80">
              Our specialists are available to discuss your unique requirements and provide personalized guidance for your gemstone acquisitions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
            <div className="md:col-span-3">
              <div className="glass-card rounded-lg p-8 md:p-10">
                <h2 className="font-playfair text-2xl font-semibold mb-6">
                  Contact Our Specialists
                </h2>
                <ContactForm />
              </div>
            </div>
            
            <div className="md:col-span-2 space-y-6">
              <div className="glass-card rounded-lg p-8">
                <h3 className="font-playfair text-xl font-semibold mb-6">
                  Private Appointments
                </h3>
                <p className="text-neutral-charcoal/80 mb-6">
                  We conduct private consultations by appointment only at our discreet locations in London, Dubai, and Hong Kong.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin size={20} className="text-gold mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">London Office</p>
                      <p className="text-sm text-neutral-charcoal/70">Mayfair, London, UK</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin size={20} className="text-gold mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Dubai Office</p>
                      <p className="text-sm text-neutral-charcoal/70">DIFC, Dubai, UAE</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin size={20} className="text-gold mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Hong Kong Office</p>
                      <p className="text-sm text-neutral-charcoal/70">Central, Hong Kong</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="glass-card rounded-lg p-8">
                <h3 className="font-playfair text-xl font-semibold mb-6">
                  Direct Contact
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone size={20} className="text-gold mr-3 flex-shrink-0" />
                    <p>+44 20 7123 4567</p>
                  </div>
                  <div className="flex items-center">
                    <Mail size={20} className="text-gold mr-3 flex-shrink-0" />
                    <p>contact@opulentgemstone.com</p>
                  </div>
                </div>
                <div className="border-t border-gray-200 mt-6 pt-6">
                  <p className="text-sm text-neutral-charcoal/70">
                    For urgent inquiries regarding specific rare gemstones, please contact your designated procurement specialist directly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="page-section bg-neutral-ivory/50">
        <div className="premium-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block py-1 px-3 border border-gold/50 text-gold text-xs uppercase tracking-widest mb-4">
              Frequently Asked Questions
            </span>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold">
              Common Inquiries
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "How does the procurement process work?",
                answer: "Our procurement process begins with a private consultation to understand your specific requirements. Our specialists then leverage our extensive network to identify exceptional gemstones that align with your criteria. Each potential acquisition undergoes our rigorous authentication process before being presented for your consideration."
              },
              {
                question: "What types of gemstones do you procure?",
                answer: "We specialize in exceptional colored diamonds, rare colored gemstones (including Kashmir sapphires, Burmese rubies, and Colombian emeralds), and historically significant jewelry pieces. Our expertise extends to all rare and valuable gemstones of exceptional quality."
              },
              {
                question: "How do you ensure the authenticity of gemstones?",
                answer: "Every gemstone undergoes our comprehensive certification protocol, which includes detailed gemological analysis, independent laboratory verification, and thorough provenance research. This rigorous process ensures absolute confidence in the authenticity and quality of your acquisition."
              },
              {
                question: "Do you offer international services?",
                answer: "Yes, we maintain offices in London, Dubai, and Hong Kong, and provide services to clients worldwide. Our specialists regularly travel to meet with clients in Europe, Asia, the Middle East, and the Americas for private consultations."
              }
            ].map((faq, index) => (
              <div key={index} className="glass-card rounded-lg p-8">
                <h3 className="font-playfair text-xl font-semibold mb-3">
                  {faq.question}
                </h3>
                <p className="text-neutral-charcoal/80">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
