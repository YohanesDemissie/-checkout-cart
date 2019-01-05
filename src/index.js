import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom';

const app = <BrowserRouter>
  <App />
</BrowserRouter>
ReactDOM.render(app, document.getElementById('root'));

// ReactDOM.render(app, document.getElementById('root')); //new method that ties in navigation in app.js
