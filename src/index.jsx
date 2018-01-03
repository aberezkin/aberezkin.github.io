import React from 'react';
import ReactDOM from 'react-dom';
import 'react-typist/dist/Typist.css';
import './index.css';
import App from './components/App/index';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
