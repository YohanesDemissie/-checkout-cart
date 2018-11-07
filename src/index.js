import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import store from './config/store';

const app =
<Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</Provider>
ReactDOM.render(app, document.getElementById('root')); //new method that ties in navigation in app.js

// ReactDOM.render(<App />, document.getElementById('root')); THS METHOD breaks using navigation outside of the <Route /> Comnponent