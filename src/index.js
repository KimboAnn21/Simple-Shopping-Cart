import React from 'react';
import ReactDOM from 'react-dom/server';
import './index.css';
import App from './App.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.renderToString(<App />, document.getElementById('root'));

serviceWorker.unregister();
