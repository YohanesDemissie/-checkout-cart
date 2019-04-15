import React from 'react';
import '../styles/home.css'

import ProductListing from '../features/product-listing'

export default function HomePage(props) {
  return <div>
    <h2 className="header">Home Page</h2>
    <ProductListing />
  </div>
}