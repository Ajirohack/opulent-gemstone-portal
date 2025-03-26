
import React from 'react';
import { Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const ClientPortal = () => {
  return (
    <section className="page-section bg-neutral-ivory/50">
      <div className="premium-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="glass-card rounded-lg p-8 md:p-10 space-y-6 transform hover:-translate-y-1 transition-transform duration-300">
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                <Lock size={24} className="text-gold" />
              </div>
              <h3 className="font-playfair text-2xl md:text-3xl font-semibold">
                Exclusive Client Portal
              </h3>
              <p className="text-neutral-charcoal/80">
                Access your private collection, view acquisition opportunities, and communicate securely with your personal procurement specialist.
              </p>
              <div className="pt-4">
                <Link to="/client-portal" className="btn-primary">
                  Enter Portal
                </Link>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 space-y-6">
            <span className="inline-block py-1 px-3 border border-gold/50 text-gold text-xs uppercase tracking-widest">
              By Invitation Only
            </span>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold">
              Personalized Service for <span className="gold-text">Distinguished Clients</span>
            </h2>
            <p className="text-lg text-neutral-charcoal/80 max-w-lg">
              Our bespoke client portal provides a discreet and secure environment for our privileged clientele to access exclusive collections and personalized services.
            </p>
            <ul className="space-y-3">
              {[
                'Private viewings of rare acquisitions',
                'Secure messaging with your dedicated specialist',
                'Exclusive event invitations',
                'Customized procurement requests'
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <span className="h-2 w-2 rounded-full bg-gold" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientPortal;
