import React from 'react';
import './Contact.css';
import { FaLinkedinIn, FaTwitter, FaInstagram, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => (
  <div className="contact-page">
    <div className="contact-content">
      <div className="contact-text">
        <h1>Get in Touch</h1>
        <p>
        Driven student with a passion for learning and a desire to make a positive impact through innovation and collaboration. 
        </p>
        <div className="social-media-icons">
          <a href="https://www.linkedin.com/in/sai-bhavya-reddy-asadi-532662247/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          <a href="https://github.com/AsadiSaiBhavyaReddy/PRODIGY_WD_04" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="mailto:saibhavyaasadi@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope /></a>
        </div>
      </div>
      <div className="contact-info">
        <div className="info-box">
          <FaLinkedinIn />
          <p>Sai Bhavya Reddy Asadi</p>
        </div>
        <div className="info-box">
          <FaEnvelope />
          <p>saibhavyaasadi@gmail.com</p>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
