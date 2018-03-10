import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import LanguagePicker from '../LanguagePicker';
import HeaderText from '../HeaderText';

const Header = ({ language, onLanguagePick }) => (
  <header>
    {/*<LanguagePicker*/}
      {/*className="language-picker"*/}
      {/*initial={language}*/}
      {/*onLanguagePick={onLanguagePick}*/}
    {/*/>*/}
    <div className="text">
      <HeaderText language={language} />
    </div>
  </header>
);

Header.propTypes = {
  language: PropTypes.string,
  onLanguagePick: PropTypes.func.isRequired,
};

Header.defaultProps = {
  language: 'us',
};

export default Header;
