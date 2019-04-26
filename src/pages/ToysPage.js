import React from 'react';
import ProductListing from '../features/product-listing'
import '../styles/home.css';

class ToysPage extends React.Component {
  render() {
    return (
      <div>
        <h2 className="header">Toys Page</h2>
        <ProductListing />
      </div>
    )
  }
}
export default ToysPage;