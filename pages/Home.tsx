import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Virtualion from '../components/Virtualion';
import JewelryShowcase from '../components/JewelryShowcase';
import Blog from '../components/Blog';
import AiPlayground from '../components/AiPlayground';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      {/* Featured Products Area */}
      <div className="relative z-20 -mt-20 mb-20">
        <Virtualion />
      </div>
      
      <JewelryShowcase />
      <Services />
      <Blog />
      <AiPlayground />
      <Contact />
    </>
  );
};

export default Home;