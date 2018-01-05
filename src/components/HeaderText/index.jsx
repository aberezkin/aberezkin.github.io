import React from 'react';
import PropTypes from 'prop-types';
import Typist from 'react-typist';
import Title from '../Title';
import TypistLoop from '../TypistLoop';
import getText, { HELLO_MESSAGE, TYPIST_SKILLS } from '../../utilities/texts';

const HeaderText = ({ language }) => {
  const typistSkills = getText(TYPIST_SKILLS, language);

  return (
    <div>
      <Title large><i className="em em-male-astronaut" /></Title>
      <Title large>{ getText(HELLO_MESSAGE, language) }</Title>
      <Title large>
        <TypistLoop>
          {
            typistSkills.map(text => (
              <Typist key={text}>
                {text}
                <Typist.Backspace count={text.length} delay={2000} />
              </Typist>
            ))
          }
        </TypistLoop>
      </Title>
    </div>
  );
};

HeaderText.propTypes = {
  language: PropTypes.string,
};

HeaderText.defaultProps = {
  language: 'us',
};

export default HeaderText;
