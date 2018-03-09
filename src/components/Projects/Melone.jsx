import React from 'react';
import { Row, Col } from 'react-styled-flexboxgrid';
import Frame from '../Frame';
import Image from '../Image';
import Title from '../Title';
import MeloneScreenshot from './img/melone.png';
import MeloneMobile from './img/melone-mobile.png';

const Melone = () => (
  <Row center="lg" className="project">
    <Col lg={7} md={7} sm={6} xs={12}>
      <div className="illustrations">
        <div className="browser">
          <Frame browser>
            <Image
              filling
              src={MeloneScreenshot}
            />
          </Frame>
        </div>
        <Frame className="phone right">
          <Image
            filling
            style={{ borderRadius: 20 }}
            rounded
            src={MeloneMobile}
          />
        </Frame>
      </div>
    </Col>
    <Col lg={5} md={5} sm={6} xs={12}>
      <div style={{ textAlign: 'left' }}>
        <Title>Melone.io</Title>
        <p>
          I launched a local business in Vladivostok,
          Russia (a marketplace for handmade artists, a local version of Etsy)
          and made everything from the backend
          (MongoDB + Node.js + Express) to the frontend (Angular 2+).
        </p>
        <p>
          It even gained revenue, but unfortunately,
          due to my lack of entrepreneurial experience,
          I didn&#39;t know how to scale it up and with time it has slowly drowned.
        </p>
        <p>
          Nevertheless, I gained some (not only tech) skills from this failure.
          Also, I have gathered a small
          team of developers and got some team management experience.
        </p>
      </div>
    </Col>
  </Row>
);

export default Melone;
