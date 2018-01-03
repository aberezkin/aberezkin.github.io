import React from 'react';
import Typist from 'react-typist';
import './Header.css';
import Title from '../Title';
import TypistLoop from '../TypistLoop/index';

const Header = () => {
  const buildees = [
    'landing pages.',
    'corporate websites.',
    'web apps.',
    'mobile apps.',
    'backend servers.',
    'with ❤️.',
  ];

  return (
    <header>
      <div className="text">
        <Title large><i className="em em-male-astronaut" /></Title>
        <Title large>Hi, I&apos;m Ark and I build </Title>
        <Title large>
          <TypistLoop>
            {
              buildees.map(text => (
                <Typist key={text}>
                  {text}
                  <Typist.Backspace count={text.length} delay={2000} />
                </Typist>
              ))
            }
          </TypistLoop>
        </Title>
      </div>
    </header>
  );
};


export default Header;
