import React from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import Title from '../Title';
import Frame from '../Frame';
import Image from '../Image';
import PortfolioScreenshot from './img/portfolio.png';
import PortfolioMobile from './img/portfolio-mobile.png';

const Portfolio = () => (
  <div>
    <Title>This portfolio</Title>
    <Grid fluid>
      <Row center="xs">
        <Col lg={5} md={5} sm={6} xs={12}>
          <div className="illustrations" style={{ minSize: '100%', maxSize: '100%' }}>
            <div className="browser">
              <Frame browser>
                <Image
                  filling
                  src={PortfolioScreenshot}
                />
              </Frame>
            </div>
            <Frame className="phone left">
              <Image
                filling
                style={{ borderRadius: 20 }}
                src={PortfolioMobile}
              />
            </Frame>
          </div>
        </Col>
      </Row>
    </Grid>
    <p>
      As you may have guessed I made that portfolio too. <br />
      I used React and Gatsby for that. Hope you like it ;)
    </p>
    <p style={{ fontSize: '0.7em', opacity: 0.7}}>
      You can see its source code &nbsp;
      <a
        href="https://github.com/aberezkin/aberezkin.github.io"
        target="_blank"
        rel="noopener noreferrer"
      >
        here
      </a>
    </p>
  </div>
);

export default Portfolio;