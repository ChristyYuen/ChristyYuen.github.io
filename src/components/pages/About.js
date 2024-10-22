import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import CaroCard from '../CaroCard';
import AboutMe from '../AboutMe';
import TechStack from '../TechStack';

function About(){
  return (
    <>
        <h2 className='about'>ABOUT wip</h2>
        <AboutMe />
        <TechStack />
        <CaroCard /> 
        <Footer />
    </>
 );
}

export default About;