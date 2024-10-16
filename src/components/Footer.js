import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import logo from './images/logo.png';
import logo2 from './images/logo_mirror.png';
import resume from './pdf/Yuen_Christy_Resume.pdf'

function Footer() {
  const jumpToTop = () => {
    window.scrollTo(0, 0); 
  };

  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
          <p className='footer-subscription-heading'>
              Contact me at 
                  <a href="mailto:yuenchristy8@gmail.com?subject=%5BName%5D%20%5BCompany%5D%20Let%27s%20Connect%21" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     style={{ paddingLeft: '5px' }}
                     >
                    yuenchristy8@gmail.com
                  </a>
          </p>
        <p className='footer-subscription-text'>
          Click on my email to get started
        </p>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Me</h2>
            <Link to='/about' onClick={jumpToTop}>About</Link>
            <Link to='/projects' onClick={jumpToTop}>Projects</Link>
            <a href={resume} download='Yuen_Christy_Resume.pdf' className='footer-link'>Resume</a>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Let's Connect</h2>
                <a 
                  href="https://github.com/ChristyYuen" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className='footer-link'
                >
                  GitHub
                </a>
                <a 
                  href="https://www.linkedin.com/in/yuenchristy/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className='footer-link'
                >
                  LinkedIn
                </a>
                <a 
                  href="mailto:yuenchristy8@gmail.com?subject=%5BName%5D%20%5BCompany%5D%20Let%27s%20Connect%21" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className='footer-link'
                >
                  Email
                </a>
          </div>
        </div>
      </div>

      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' onClick={jumpToTop} className='social-logo'>
            <img src={logo} className='favicon'/>
            CHRISTY
            <img src={logo2} className='favicon'/>
            </Link>
          </div>
          <small class='website-rights'>CHRISTY © 2022</small>
          <div class='social-icons'>
          <a
            className='social-icon-link'
            href='https://github.com/ChristyYuen'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='GitHub'
          >
            <i className='fab fa-github' />
          </a>
          <a
            className='social-icon-link'
            href='https://www.linkedin.com/in/yuenchristy/'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='LinkedIn'
          >
            <i className='fab fa-linkedin' />
          </a>
          <Link
              className='social-icon-link'
              to='/'
              onClick={jumpToTop}
              aria-label='Home'
          >
              <i className='fa fa-home' />
          </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
