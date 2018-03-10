import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';
import theme from '../../utilities/theme';
import Header from '../Header';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Footer from '../Footer/Footer';
import About from '../About';
import WannaWork from '../WannaWork';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      language: 'en',
    };
  }

  // componentDidMount() {
  //   this.state = {
  //     language: navigator.language.slice(0, 2),
  //   };
  // }

  setLanguage = (language) => {
    this.setState({ language });
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <Helmet>
            <title>Ark Berezkin | A full-stack developer.</title>
          </Helmet>
          <Header
            language={this.state.language}
            onLanguagePick={this.setLanguage}
          />
          <Skills />
          <Projects />
          <About language={this.state.language} />
          <WannaWork />
          <Footer />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
