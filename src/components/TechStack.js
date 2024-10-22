import React from 'react';
import './TechStack.css'; // Import the CSS file

import { FaReact, FaPython, FaGit, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';
import { SiLooker, SiJupyter, SiTailwindcss } from 'react-icons/si';
import { FaDatabase } from 'react-icons/fa';

const techStack = [
  { 
    name: 'React', 
    icon: <FaReact />, 
    color: '#61DAFB', 
    link: 'https://github.com/ChristyYuen/ChristyYuen.github.io' 
  },
  { 
    name: 'Python', 
    icon: <FaPython />, 
    color: '#3776AB', 
    link: 'https://github.com/ChristyYuen/Contacts-Management-System' 
  },
  { 
    name: 'Git', 
    icon: <FaGit />, 
    color: '#F05032', 
    link: 'https://github.com/ChristyYuen/ChristyYuen.github.io' 
  },
  { 
    name: 'HTML5', 
    icon: <FaHtml5 />, 
    color: '#E34F26', 
    link: 'https://github.com/ChristyYuen/ChristyYuen.github.io' 
  },
  { 
    name: 'CSS3', 
    icon: <FaCss3Alt />, 
    color: '#1572B6', 
    link: 'https://github.com/ChristyYuen/ChristyYuen.github.io' 
  },
  { 
    name: 'JavaScript', 
    icon: <FaJs />, 
    color: '#F7DF1E', 
    link: 'https://github.com/ChristyYuen/ChristyYuen.github.io' 
  },
  { 
    name: 'SQL', 
    icon: <FaDatabase />, 
    color: '#003B57', 
    link: 'https://github.com/ChristyYuen' 
  },
  { 
    name: 'Looker', 
    icon: <SiLooker />, 
    color: '#4285F4', 
    link: 'https://github.com/ChristyYuen' 
  },
  { 
    name: 'Jupyter', 
    icon: <SiJupyter />, 
    color: '#F37626', 
    link: 'https://github.com/ChristyYuen' 
  },
  { 
    name: 'Tailwind CSS', 
    icon: <SiTailwindcss />, 
    color: '#06B6D4', 
    link: 'https://github.com/SeijDeLeon/California-Seismic' 
  },
];

const TechStack = () => (
  <div className='tech'>
    <h1 className='tech-header'>My Tech Stack</h1>
    <div className="tech-grid">
      {techStack.map(tech => (
        <a 
          key={tech.name} 
          href={tech.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="tech-card" 
          style={{ borderColor: tech.color }}
        >
          <div className="tech-icon" style={{ color: tech.color }}>
            {tech.icon}
          </div>
          <span style={{ color: tech.color }}>{tech.name}</span>
        </a>
      ))}
    </div>
  </div>
);

export default TechStack;
