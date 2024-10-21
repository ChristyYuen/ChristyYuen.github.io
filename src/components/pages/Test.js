import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
// import AboutMe from '../AboutMe';
// import Carousel from '../ICarousel';
import CaroCard from '../CaroCard';

function Test() {
  return (
    <>
      <HeroSection />
      <CaroCard /> 
      <Cards />
      <Footer />
    </>
  );
}

export default Test;