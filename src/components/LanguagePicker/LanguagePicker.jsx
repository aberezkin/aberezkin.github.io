import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Image from '../Image';
import ru from './img/ru.svg';
import us from './img/us.png';
import './LanguagePicker.css';

const style = {
  textAlign: 'center',
  padding: 8,
};

class LanguagePicker extends Component {
  constructor(props) {
    super(props);

    this.state = { picked: this.props.initial };
  }

  pickLanguage = (language) => {
    this.setState({ picked: language });
  };

  render() {
    const { picked } = this.state;

    return (
      <div style={style}>
        <Image
          xsmall
          circle
          className={`language-wrapper ${picked === 'us' ? 'active' : ''}`}
          src={us}
          alt="English"
          onClick={() => this.pickLanguage('us')}
        />
        <Image
          xsmall
          circle
          className={`language-wrapper ${picked === 'ru' ? 'active' : ''}`}
          src={ru}
          alt="Russian"
          onClick={() => this.pickLanguage('ru')}
        />
      </div>
    );
  }
}

LanguagePicker.propTypes = {
  initial: PropTypes.string,
};

LanguagePicker.defaultProps = {
  initial: 'us',
};

export default LanguagePicker;
