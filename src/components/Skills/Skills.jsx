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
    <Grid fluid style={{ paddingTop: 42 }}>
      <Row center="sm">
        <Col lg={4} md={4} sm={6} xs={12}>
          <Title large className="icon-grad"><FontAwesome name="safari" /></Title>
          <Title className="title">Web</Title>
          <p>
            I&apos;m highly proficient with modern web technologies.
            To build for web I use mainstream Javascript frameworks
            such as React and Angular. By using these I strive to
            increase efficiency of development and maintainability of
            your app. My web apps are fast, responsive and well designed.
          </p>
        </Col>
        <Col lg={4} md={4} sm={6} xs={12}>
          <Title large className="icon-grad"><FontAwesome name="tablet" /></Title>
          <Title className="title">Mobile</Title>
          <p>
            The world is almost fully mobile now.
            I also build frontend apps for mobile platforms.
            React Native lets me to bring my Javascript expertise
            to this world. Using this I build modern, crossplarform
            apps so your users can access your services on the go.
          </p>
        </Col>
        <Col lg={4} md={4} sm={6} xs={12}>
          <Title large className="icon-grad"><FontAwesome name="server" /></Title>
          <Title className="title">Backend</Title>
          <p>
            Today almost everything is data driven. To make greater
            decisions your users need to access greater amounts of
            data faster. So every business needs a decent backend API
            to pass this data to the frontend and then to your users.
            Fortunately, I build these too mainly using Node.js, Express and
            MongoDB or PostgreSQL.
          </p>
        </Col>
      </Row>
    </Grid>
  </div>
);

export default Skills;
