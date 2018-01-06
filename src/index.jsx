import React from 'react';
import ReactDOM from 'react-dom';
import 'react-typist/dist/Typist.css';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const root = document.getElementById('root');
const render = (Component) => { ReactDOM.render(<Component />, root); };

render(App);

if (module.hot)
  module.hot.accept('./components/App', () => { render(App); });


registerServiceWorker();
