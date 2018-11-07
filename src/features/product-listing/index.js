import React from 'react';
import ProductListItem from './ProductListItem';

export default function ProductListing(props) {
  return <div>
    {
      props.products.map( product => //iterating through properties of products with a mapping method
        <ProductListItem product={product} />) //grabbing a single item from our products database
    }
  </div>
}