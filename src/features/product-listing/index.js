import React from 'react';
import '../../index.css';
import ProductListItem from './ProductListItem';

function ProductListing(props) {
  return <div className="productListing">
    {
      props.products.map( product => //iterating through properties of products with a mapping method
        <ProductListItem product={product} />) //grabbing a single item from our products database
    }
  </div>
}

function mapStateToProps(state) { //maps out cart to state so way can say props.cart to get value of items (aka payload of cart)
  return {
    cart: state.cart
  }
}

function mapDispatchStateToProps(dispatch) {//maps all of our actions to props on this component. dispatch being a shortcut for store.dispatch which is an action onto our store
  return {
    addToCart: (item) => {
      dispatch({type: 'ADD', payload: item}) //dispatches action to our store
    }
  }
}

//continue at 43 mins