import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 
import avatar from './avatar.jpg';

const Navbar = () => (
  <nav className="navbar">
    <div className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/about">About Me</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact Me</Link>
      <Link to="/skill">Skills</Link>
    </div>
    <div className="avatar-container">
      <img src={avatar} alt="Avatar" className="avatar" />
    </div>
  </nav>
);

export default Navbar;
