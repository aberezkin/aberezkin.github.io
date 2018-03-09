import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import Image from '../Image';
import Title from '../Title';
import getText, {languages, FIRST_NAME, ABOUT, GREETINGS, DROP_A_LINE} from '../../utilities/texts';
import profilepic from './img/profilepic.jpg';

const About = ({ language }) => {
  const paragraphs = getText(ABOUT, language);

  return (
    <div style={{ margin: '48px 0'}}>
      <Grid fluid>
        <Row>
          <Col lg={4} md={4} sm={6} xs={12}>
            <Image filling rounded large src={profilepic} />
          </Col>
          <Col lg={6} md={6} sm={6} xs={12} style={{ textAlign: 'left' }}>
            <Title>{getText(GREETINGS, language) + getText(FIRST_NAME, language)}</Title>
            {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            <p>
              {getText(DROP_A_LINE, language)}
              <a href="mailto:berezkinarkadii@gmail.com?subject=Let's%20work%togeter">berezkinarkadii@gmail.com</a>
              .
            </p>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

About.propTypes = {
  language: PropTypes.oneOf(languages).isRequired,
};

export default About;
