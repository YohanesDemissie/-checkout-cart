import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Router from './Router';

const Navigation = (props) =>
  <ul>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/my-cart'>My Cart</NavLink></li>
  </ul>

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Router />
      </div>
    );
  }
}

export default App;
