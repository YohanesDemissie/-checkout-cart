import React, { Component } from 'react';
import { connect } from 'react-redux'
import Router from './Router';
import './styles/nav.css';
import './styles/side-menu.css';

import { NavLink, withRouter } from 'react-router-dom' //with router allows us to use connect on our App component without destroying the function of routing
import cart from './features/cart';

const Navigation = ({ cart }) => <nav>
  <ul className="top-menu">
    <li><NavLink className="links" to='/'>Home</NavLink></li>
    <li><NavLink className="links" to='cart'>Cart ({cart.reduce((acc, item) => {
      return acc + item.quantity
    }, 0)})</NavLink></li> {/* cart.reduce is necessary to accumulate total items(starting at 0), rather than just the amount of different items(ie: counting items by id rather than by quantity*/}
    <li><NavLink className="links" to='/checkout'>Check out</NavLink></li>
  </ul>
</nav>

class App extends Component {
  render() {
    return (
      <div>
        <img className="logo" src="https://svgsilh.com/svg/402756.svg" />
        <nav className="side-menu">
          <a>Clothes</a>
          <a>Shoes</a>
          <a>Toys</a>
          <a>Accessories</a>
        </nav>
        <div className='page-container'>
          <Navigation {...this.props}/>
          <Router />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart, //gives us access to state of cart
  }
}

export default withRouter(connect(mapStateToProps)(App));