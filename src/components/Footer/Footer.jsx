import React from 'react';
import './Footer.css';

const Footer = () => (
  <div className="footer">
    <div className="made-by">Made by me &copy; {new Date().getFullYear()}</div>
  </div>
);

export default Footer;
