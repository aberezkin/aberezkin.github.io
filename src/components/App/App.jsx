import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import About from '../About';
import Header from '../Header';
import theme from '../../utilities/theme';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      language: navigator.language.slice(0, 2),
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
          <About language={this.state.language} />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
