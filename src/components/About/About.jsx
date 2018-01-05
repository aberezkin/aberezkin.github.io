import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import Image from '../Image';
import Title from '../Title';
import getText, { languages, FULL_NAME, ABOUT } from '../../utilities/texts';
import profilepic from './img/profilepic.jpg';

const styles = {
  margin: 16,
};

const About = ({ language }) => {
  const paragraphs = getText(ABOUT, language);

  return (
    <div style={styles}>
      <Grid>
        <Row>
          <Col lg={4} md={4} sm={6} xs={12}>
            <Image filling rounded src={profilepic} />
          </Col>
          <Col lg={8} md={8} sm={6} xs={12}>
            <Title>{getText(FULL_NAME, language)}</Title>
            {paragraphs.map(p => <p key={p}>{p}</p>)}
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
