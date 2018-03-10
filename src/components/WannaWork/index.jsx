import React from 'react';
import FontAwesome from 'react-fontawesome';
import Title from '../Title';
import './index.css';


const WannaWork = () => (
  <div id="wanna-work" className="block">
    <Title large bold>Want to work together?</Title>
    <Title sub>
      Drop me a line to &nbsp;
      <a href="mailto:berezkinarkadii@gmail.com?subject=Let's%20work%togeter">
        berezkinarkadii@gmail.com
      </a>.
    </Title>
    <p style={{ opacity: 0.7, fontSize: '.85em' }}>Or in any of these social networks :)</p>
    <div className="socials">
      {/* TODO: move these links to separate component for reusage */}
      <a
        className="sm-wrapper"
        href="https://twitter.com/arkberezkin"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesome className="medium" name="twitter" />
      </a>
      <a
        className="sm-wrapper"
        href="https://github.com/aberezkin"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesome className="medium" name="github" />
      </a>
      <a
        className="sm-wrapper"
        href="https://www.linkedin.com/in/aberezkin/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesome className="medium" name="linkedin" />
      </a>
      <a
        className="sm-wrapper"
        href="https://angel.co/aberezkin"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesome className="medium" name="angellist" />
      </a>
      {/*<a*/}
        {/*className="sm-wrapper"*/}
        {/*href="mailto:berezkinarkadii@gmail.com"*/}
      {/*>*/}
        {/*<FontAwesome className="medium" name="envelope-o" />*/}
      {/*</a>*/}
    </div>
  </div>
);

export default WannaWork;