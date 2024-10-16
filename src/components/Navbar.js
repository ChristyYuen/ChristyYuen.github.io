import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './images/logo.png';
import logo2 from './images/logo_mirror.png';
import resume from './pdf/Yuen_Christy_Resume.pdf'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const jumpToTop = () => {
    window.scrollTo(0, 0); 
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = resume; // Path to your resume
    link.download = 'Yuen_Christy_Resume.pdf'; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); // Clean up
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link 
            to='/' 
            className='navbar-logo' 
            onClick={() => { closeMobileMenu(); jumpToTop(); }}>
                <img src={logo} className='favicon'/>
                CHRISTY
                <img src={logo2} className='favicon'/>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' 
                className='nav-links' 
                onClick={() => { closeMobileMenu(); jumpToTop(); }}>
                  Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/about'
                className='nav-links'
                onClick={() => { closeMobileMenu(); jumpToTop(); }}
              >
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/projects'
                className='nav-links'
                onClick={() => { closeMobileMenu(); jumpToTop(); }}
              >
                Projects
              </Link>
            </li>

            <li>
                <a
                  href={resume}
                  className='nav-links-mobile'
                >
                  Resume
                </a>
            </li>
          </ul>
          {button && (
            <Button
              buttonStyle='btn--outline'
              onClick={() => {
                const link = document.createElement('a');
                link.href = resume; // Path to your resume
                link.download = 'Yuen_Christy_Resume.pdf'; // Name of the downloaded file
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link); // Clean up
              }}
            >
              RESUME
            </Button>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
