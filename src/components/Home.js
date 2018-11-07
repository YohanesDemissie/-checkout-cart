import React from 'react';

import ProductListing from '../features/product-listing/'; //automatically grabs the index file
import data from '../data/products.json'

export default function Home(props){
  return(
    <div>
      <h1>Home</h1>
      <ProductListing products={data.products} />
    </div>
  )
}

