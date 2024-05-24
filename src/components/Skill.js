import React from 'react';
import './Skill.css';
import jsLogo from '../assets/images/js-logo.png';
import reactLogo from '../assets/images/react-logo.png';
import reduxLogo from '../assets/images/redux-logo.png';
import html5Logo from '../assets/images/html5-logo.png';
import css3Logo from '../assets/images/css3-logo.png';
import canvaLogo from '../assets/images/Canva_logo.png';
import bootstrapLogo from '../assets/images/bootstrap-logo.png';
import mongodbLogo from '../assets/images/mongodb-logo.png';
import nodeLogo from '../assets/images/node-logo.png';
import pythonLogo from '../assets/images/python-logo.png';
import djangoLogo from '../assets/images/django-logo.png';
import gitLogo from '../assets/images/git-logo.png';
import photoshopLogo from '../assets/images/photoshop-logo.png';
import linuxLogo from '../assets/images/linux-logo.png';

const Skills = () => (
  <div className="skills">
    <h2>SKILLS</h2>
    <div className="skills-section">
      <h3>Front-end</h3>
      <div className="skills-list">
        <div className="skill"><img src={jsLogo} alt="JavaScript" /><p>JavaScript</p></div>
        <div className="skill"><img src={reactLogo} alt="React" /><p>React</p></div>
        <div className="skill"><img src={reduxLogo} alt="Redux" /><p>Redux</p></div>
        <div className="skill"><img src={html5Logo} alt="HTML5" /><p>HTML5</p></div>
        <div className="skill"><img src={css3Logo} alt="CSS3" /><p>CSS3</p></div>
        <div className="skill"><img src={bootstrapLogo} alt="Bootstrap" /><p>Bootstrap</p></div>
      </div>
    </div>
    <div className="skills-section">
      <h3>Back-end</h3>
      <div className="skills-list">
        <div className="skill"><img src={mongodbLogo} alt="MongoDB" /><p>MongoDB</p></div>
        <div className="skill"><img src={nodeLogo} alt="Node.js" /><p>Node.js</p></div>
        <div className="skill"><img src={pythonLogo} alt="Python" /><p>Python</p></div>
        <div className="skill"><img src={djangoLogo} alt="Django" /><p>Django</p></div>
      </div>
    </div>
    <div className="skills-section">
      <h3>Other</h3>
      <div className="skills-list">
        <div className="skill"><img src={gitLogo} alt="Git" /><p>Git</p></div>
        <div className="skill"><img src={canvaLogo} alt="Canva" /><p>Canva</p></div>
        <div className="skill"><img src={photoshopLogo} alt="Photoshop" /><p>Photoshop</p></div>
        <div className="skill"><img src={linuxLogo} alt="Linux" /><p>Linux</p></div>
      </div>
    </div>
  </div>
);

export default Skills;
