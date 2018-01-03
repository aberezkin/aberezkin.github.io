import React from 'react';
import { ThemeProvider } from 'styled-components';
import About from '../About';
import theme from '../../utilities/theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <About />
  </ThemeProvider>
);

export default App;
