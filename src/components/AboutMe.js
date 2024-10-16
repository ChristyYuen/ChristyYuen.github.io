import React from 'react';
import './AboutMe.css'; // Import CSS specific to this component
import AboutMeItem from './AboutMeItem';
import iceland from './images/iceland.jpg'; // Replace with your image path
import grad from './images/Grad.JPG';

function AboutMe() {
  return (
    <div className='aboutme'>
      <h1>About Me</h1>
      <div className='aboutme__container'>
        <div className='aboutme__wrapper'>
            <ul className='aboutme__items'>
                <AboutMeItem
                    src={iceland}
                    label='Location: Iceland'
                    title="Travel Lover!"
                    subtitle="Been to Iceland & Australia."
                />
                <AboutMeItem
                    src={grad} 
                    label='UCSC Graduate' 
                    title="Majored in Computer Science." 
                    subtitle="Minor in Technology and Management." 
                />
            </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
