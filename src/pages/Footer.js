import React from 'react';
import '../styles/footer.css';

class Footer extends React.Component {
  render() {
    return(
      <div>
        <nav className="footer">
          <ul>
            <li>Home</li>
            <li>Business</li>
            <li>Career</li>
            <li>Vendors</li>
            <li>Benefits</li>
            <li>CopyRight</li>
            <li>Trademarks</li>
            
          </ul>
        </nav>
      </div>
    )
  }
}

export default Footer;