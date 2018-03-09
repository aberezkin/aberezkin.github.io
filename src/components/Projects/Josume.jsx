import React from 'react';
import { Row, Col } from 'react-styled-flexboxgrid';
import Frame from '../Frame';
import Image from '../Image';
import Title from '../Title';
import JosumeScreenshot from './img/josume.png';
import JosumeMobile from './img/josume-mobile.png';

const Josume = () => (
  <Row reverse center="lg" className="project">
    <Col lg={7} md={7} sm={6} xs={12}>
      <div className="illustrations">
        <div className="browser">
          <Frame browser>
            <Image
              filling
              src={JosumeScreenshot}
            />
          </Frame>
        </div>
        <Frame className="phone left">
          <Image
            filling
            style={{ borderRadius: 20 }}
            src={JosumeMobile}
          />
        </Frame>
      </div>
    </Col>
    <Col lg={5} md={5} sm={6} xs={12}>
      <div style={{ textAlign: 'right' }}>
        <Title>Josume</Title>
        <p>
          Josume is a hackathon project that was made in under 48 hours.
          The goal was to make a service that can predict best carrier
          trajectory using natural language processing and machine learning.
          Sponsors provided us with datasets of resumes and available jobs on their HR service.
        </p>
        <p>
          I was a team leader and front-end developer for that project.
          I was managing data analysis so that we made prediction model that with a
          given skills overview in natural language can predict next best position
          for a job seeker. Also, I developed a frontend part of the service.
        </p>
        <p>
          With this project, we have got a 2nd place in our nomination
          and won $2500 for our team.
        </p>
      </div>
    </Col>
  </Row>
);

export default Josume;
