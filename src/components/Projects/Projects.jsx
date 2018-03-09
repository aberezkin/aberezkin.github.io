import React from 'react';
import { Grid } from 'react-styled-flexboxgrid';
import Title from '../Title';
import './Projects.css';
import Melone from './Melone';
import Josume from './Josume';
import IUpload from './IUpload';
import Portfolio from './Portfolio';

const Projects = () => (
  <div className="projects block">
    <Title large bold>My projects</Title>
    <Title sub>That&#39;s what i&#39;ve been creating lately.</Title>
    <br /><br />
    <Grid fluid>
      <Josume />
      <Melone />
      <IUpload />
    </Grid>
    <br /><br />
    <Portfolio />
  </div>
);

export default Projects;
