import React from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import FontAwesome from 'react-fontawesome';
import Title from '../Title/index';
import './Skills.css';

const style = {
  textAlign: 'center',
  overflow: 'hidden',
  paddingLeft: 16,
  paddingRight: 16,
};

const Skills = () => (
  <div className="block" style={style}>
    <Title large bold>My expertise</Title>
    <Title sub>I can do any part of an application.</Title>
    <Grid style={{ paddingTop: 42 }}>
      <Row center="sm">
        <Col lg={4} md={4} sm={6} xs={12}>
          <Title large className="icon-grad"><FontAwesome name="safari" /></Title>
          <Title className="title">Web</Title>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque in finibus risus. Suspendisse diam ligula,
            accumsan sed urna ac, dignissim consectetur justo.
            Nullam pharetra nulla eu neque scelerisque cursus.
          </p>
        </Col>
        <Col lg={4} md={4} sm={6} xs={12}>
          <Title large className="icon-grad"><FontAwesome name="tablet" /></Title>
          <Title className="title">Mobile</Title>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque in finibus risus. Suspendisse diam ligula,
            accumsan sed urna ac, dignissim consectetur justo.
            Nullam pharetra nulla eu neque scelerisque cursus.
          </p>
        </Col>
        <Col lg={4} md={4} sm={6} xs={12}>
          <Title large className="icon-grad"><FontAwesome name="server" /></Title>
          <Title className="title">Backend</Title>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque in finibus risus. Suspendisse diam ligula,
            accumsan sed urna ac, dignissim consectetur justo.
            Nullam pharetra nulla eu neque scelerisque cursus.
          </p>
        </Col>
      </Row>
    </Grid>
  </div>
);

export default Skills;
