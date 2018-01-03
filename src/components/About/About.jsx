import React from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import Image from '../Image';
import Title from '../Title';
import profilepic from './img/profilepic.jpg';

const styles = {
    margin: 16,
};

const About = () => (
    <div style={styles}>
        <Grid>
            <Row>
                <Col lg={4} md={4} sm={6} xs={12}>
                    <Image fill rounded src={profilepic} />
                </Col>
                <Col lg={8} md={8} sm={6} xs={12}>
                    <Title>Arkadii Berezkin</Title>
                    <p>
                        TODO: implement description
                    </p>
                </Col>
            </Row>
        </Grid>
    </div>
);

export default About;
