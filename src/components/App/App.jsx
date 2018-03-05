import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../utilities/theme';
import Header from '../Header';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Footer from '../Footer/Footer';
import About from '../About';

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
          <Skills />
          <Projects />
          <About language={this.state.language} />
          <Footer />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
