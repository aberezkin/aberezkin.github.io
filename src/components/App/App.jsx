import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import About from '../About';
import Header from '../Header';
import theme from '../../utilities/theme';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      language: 'us',
    };
  }

  setLanguage = (language) => {
    this.setState({ language });
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <Header
            language={this.state.language}
            onLanguagePick={this.setLanguage}
          />
          <About />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
