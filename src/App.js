import React, { Component } from 'react';
import { connect } from 'react-redux'
import Router from './Router';
import { NavLink, withRouter } from 'react-router-dom' //with router allows us to use connect on our App component without destroying the function of routing
// import cart from './features/cart';
// import Navigation from './pages/Navbar';
import Searching from './pages/Search';
import './styles/nav.css';
import './styles/side-menu.css';

const Navigation = ({ cart }) => <nav>
  
  <ul className="top-menu">
    <li><NavLink className="links" to='/'>Home</NavLink></li>
    <li><NavLink className="links" to='cart'>Cart ({cart.reduce((acc, item) => {
      return acc + item.quantity
    }, 0)})</NavLink></li> {/* cart.reduce is necessary to accumulate total items(starting at 0), rather than just the amount of different items(ie: counting items by id rather than by quantity*/}
    <li><NavLink className="links" to='/checkout'>Check out</NavLink></li>
    <li><NavLink className="links" to='/search'>Search</NavLink></li>

    <button id="magnifying-glass">
    </button>
  </ul>
</nav>

class App extends Component {

  render() {
    return (
      <div>
        <img className="logo" src="https://svgsilh.com/svg/402756.svg" />

        <nav className="side-menu">
          <NavLink className="side-menu-links" to='/toys'>Toys</NavLink>
          <NavLink className="side-menu-links" to='/shoes'>Shoes</NavLink>
          <NavLink className="side-menu-links" to="/clothes">Clothes</NavLink>
          <NavLink className="side-menu-links" to="/accessories">Accessories</NavLink>
        </nav>
        <div className='page-container'>
          {/* CALLING COMPONENT HIDE/SHOW FUNCTION */}
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