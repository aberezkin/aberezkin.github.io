import React from 'react';
import { ThemeProvider } from 'styled-components';
import About from '../About';
import Header from '../Header';
import theme from '../../utilities/theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <div>
      <Header />
      <About />
    </div>
  </ThemeProvider>
);

export default App;
