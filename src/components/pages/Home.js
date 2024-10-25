import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import TechStack from '../TechStack';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <TechStack />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
