import React from 'react';
import './AboutMe.css';
import AboutMeItem from './AboutMeItem';
import grad from './images/Grad.JPG';

function AboutMe() {
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
                title="Majored in Computer Science." 
                subtitle="Minor in Technology and Information Management" 
              />
            </ul>
          </div>

          <div className='aboutme__text'>
          <h1>About Me</h1>
            <p>
              Hi, I'm Christy! I graduated from UCSC with a major in Computer Science and a minor in Technology and Information Management.
              I'm passionate about traveling, having explored places like Iceland and Australia, and I love working on coding projects!
            </p>
            <p>
              I’m always looking for new ways to expand my skills and embrace new experiences, whether through coding or travel.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default AboutMe;
