'use client';

import React from 'react';
import Header from './ExpansionStrategies/Header';
import WhyMexico from './ExpansionStrategies/WhyMexico';
import OurStrategies from './ExpansionStrategies/OurStrategies';
import NetworkingAdvantages from './ExpansionStrategies/NetworkingAdvantages';
import Testimonials from './ExpansionStrategies/Testimonials';
import ContactForm from './ExpansionStrategies/ContactForm';
import Footer from '@/components/Footer';

const ExpansionStrategiesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-blue-950 text-white">
      <Header />
      <WhyMexico />
      <OurStrategies />
      <NetworkingAdvantages />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default ExpansionStrategiesPage;