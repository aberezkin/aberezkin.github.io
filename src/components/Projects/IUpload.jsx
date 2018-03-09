import React from 'react';
import { Row, Col } from 'react-styled-flexboxgrid';
import Frame from '../Frame';
import Image from '../Image';
import Title from '../Title';
import Ng2ImageUpload from './img/ng2-image-upload.png';

const IUpload = () => (
  <Row reverse center="lg" className="project">
    <Col lg={7} md={7} sm={6} xs={12}>
      <div className="illustrations">
        <Frame browser>
          <Image
            filling
            src={Ng2ImageUpload}
          />
        </Frame>
      </div>
    </Col>
    <Col lg={5} md={5} sm={6} xs={12}>
      <div style={{ textAlign: 'right' }}>
        <Title>ng2-image-upload</Title>
        <p>
          This is an angular library that I made
          and published while working on Melone.io.
          This library provides a light-weight component that
          handles file-drop, image previewing and image uploading.
        </p>
        <p>
          I needed a component that would handle uploads of handmade item pictures.
          I thought that there already should be a library for that,
          but no matter how much I looked for it
          I didn&#39;t find exactly what I want. So I decided to implement one myself.
        </p>
        <p>
          And eventually, it became quite popular!
          And now has more than 150 stars on GitHub and more
          than 8k downloads/month from npm registry.
        </p>
      </div>
    </Col>
  </Row>
);

export default IUpload;
