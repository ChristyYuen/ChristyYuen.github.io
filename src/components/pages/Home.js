import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import AboutMe from '../AboutMe';

function Home() {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
