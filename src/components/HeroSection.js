import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import vid1 from './videos/WorldData.mp4';
import resume from './pdf/Yuen_Christy_Resume.pdf'

function HeroSection() {
  const openLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return (
    <div className='hero-container'>
      <video src={vid1} autoPlay loop muted />
      <h1>Christy Yuen's </h1>
      <h1>Portfolio</h1>
      <p>Coding with Data</p>
      <div className='hero-btns'>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
            onClick={() => openLink('https://github.com/ChristyYuen')}
          >
            GitHub
          </Button>
          <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={() => openLink('https://www.linkedin.com/in/yuenchristy/')}
          >
           LinkedIn
          </Button>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
            onClick={() => {
              const link = document.createElement('a');
              link.href = resume; // Path to your resume
              link.download = 'Yuen_Christy_Resume.pdf'; // Name of the downloaded file
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link); // Clean up
            }}
          >
            Resume
          </Button>
      </div>
    </div>
  );
}

export default HeroSection;
