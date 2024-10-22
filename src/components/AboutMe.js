import React from 'react';
import './AboutMe.css';
import AboutMeItem from './AboutMeItem';
import grad from './images/Grad.JPG';
import { Button } from './Button';

function AboutMe() {
  const openLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return (
    <div className='aboutme'>

      <div className='aboutme__container'>
        <div className='aboutme__content'>
          
          {/* Cards first, then text */}
          <div className='aboutme__cards'>
            <ul className='aboutme__items'>
              <AboutMeItem
                src={grad} 
                label='UCSC Graduate' 
                title="Majored in Computer Science," 
                subtitle="Minor in Technology and Information Management" 
              />
            </ul>
          </div>

          <div className='aboutme__text'>
          <h1>About Me</h1>
            <p>
              Hi, I'm Christy! 
              I graduated from the University of California, Santa Cruz, with a major in Computer Science and a minor in Technology and Information Management. 
              My education has provided me with a solid foundation in software development and data analysis. 
            </p>
            <p>
              I am passionate about coding and enjoy working on various projects, particularly web development using React. 
              I am excited to leverage my skills to create innovative solutions and contribute to meaningful projects.
            </p>
            <div className='button'>
              <Button
                className='btns'
                buttonStyle='btn--blue'
                buttonSize='btn--small'
                onClick={() => openLink('https://github.com/ChristyYuen')}
              >
                Check out my Github
              </Button> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
