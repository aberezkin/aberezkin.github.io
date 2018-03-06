import React from 'react';
import FontAwesome from 'react-fontawesome';
// import Title from '../Title';
import './Footer.css';

const Footer = () => (
  <div className="footer">
    <div className="made-by">Made by me &copy; {new Date().getFullYear()}</div>
    <div>
      {/* TODO: move these links to separate component for reusage */}
      <a
        className="sm-wrapper"
        href="https://twitter.com/arkberezkin"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesome className="icon-grad medium" name="twitter" />
      </a>
      <a
        className="sm-wrapper"
        href="https://github.com/aberezkin"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesome className="icon-grad medium" name="github" />
      </a>
      <a
        className="sm-wrapper"
        href="https://www.linkedin.com/in/aberezkin/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesome className="icon-grad medium" name="linkedin" />
      </a>
      <a
        className="sm-wrapper"
        href="https://angel.co/aberezkin"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesome className="icon-grad medium" name="angellist" />
      </a>
      <a
        className="sm-wrapper"
        href="mailto:berezkinarkadii@gmail.com"
      >
        <FontAwesome className="icon-grad medium" name="envelope-o" />
      </a>

    </div>
  </div>
);

export default Footer;
