import React from 'react';
import './Home.css';
import picture from './picture.jpg';

const Home = () => (
  <div className="home">
    <h1 className="headline">Welcome to My Portfolio</h1>
    <img src={picture} alt="Your Name" className="profile-photo" />
    <p className="summary">
      Hi, I'm a web developer skilled in the MERN stack. I build responsive and efficient web applications.
    </p>
  </div>
);

export default Home;
