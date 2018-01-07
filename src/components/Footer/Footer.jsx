import React from 'react';
import FontAwesome from 'react-fontawesome';
// import Title from '../Title';
import './Footer.css';

const Footer = () => (
  <div className="footer">
    <FontAwesome className="icon-grad large" name="grav" />
    <br />
    <div className="made-by">Made by me &copy; {new Date().getFullYear()}</div>
    <div>
      <a className="sm-wrapper" href="https://twitter.com/arkberezkin">
        <FontAwesome className="icon-grad medium" name="twitter" />
      </a>
      <a className="sm-wrapper" href="https://github.com/aberezkin">
        <FontAwesome className="icon-grad medium" name="github" />
      </a>
    </div>
  </div>
);

export default Footer;
