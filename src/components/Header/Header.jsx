import React from 'react';
import PropTypes from 'prop-types';
import Typist from 'react-typist';
import './Header.css';
import LanguagePicker from '../LanguagePicker';
import Title from '../Title';
import TypistLoop from '../TypistLoop/';
import texts from '../../utilities/texts';

const Header = ({ language, onLanguagePick }) => {
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
      <LanguagePicker
        className="language-picker"
        onLanguagePick={onLanguagePick}
      />
      <div className="text">
        <div>
          <Title large><i className="em em-male-astronaut" /></Title>
          <Title large>{texts[language]['hello-message']}</Title>
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
      </div>
    </header>
  );
};

Header.propTypes = {
  language: PropTypes.string,
  onLanguagePick: PropTypes.func.isRequired,
};

Header.defaultProps = {
  language: 'us',
};

export default Header;
