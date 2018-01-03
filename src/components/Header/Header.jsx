import React from 'react';
import './Header.css';
import Title from '../Title';

const Header = () => (
  <header>
    <div className="text">
      <Title large><i className="em em-male-astronaut" /></Title>
      <Title large>Hi, I&apos;m Ark and I build </Title>
      <Title large>landing pages.</Title>
    </div>
  </header>
);


export default Header;
