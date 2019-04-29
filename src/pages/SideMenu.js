import React from 'react';
import '../styles/side-menu.css';

class SideMenu extends React.Component {
  constructor(){
    super();
    this.state = {
      showToys: true,
    }
  }

  onClick(e) {
    e.preventDefault();
    this.setState({ showToys: !this.state.showToys })
  }

  render() {
    return(
      <nav className="side-menu-hide">
        <a onClick={this.onClick.bind(this)}>Toys</a>
        <a>Shoes</a>
        <a>Clothes</a>
        <a>Accessories</a>
      </nav>
    )
  }
}

export default SideMenu;