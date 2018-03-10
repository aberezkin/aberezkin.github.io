import React from 'react';
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
    <p style={{ opacity: 0.5, fontSize: '.8em' }}>Or in any social networks downthere :)</p>
  </div>
);

export default WannaWork;