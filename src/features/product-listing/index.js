import React from 'react';
import { connect } from 'react-redux';
import '../../index.css';
import ProductListItem from './ProductListItem';
import { cartItemsWithQuantity } from '../cart';

function ProductListing(props) {
  return <div className="productListing">
    {
      props.products.map( product => //iterating through properties of products with a mapping method
        <ProductListItem
        product={product}
        addToCart={props.addToCart}
        cart={cartItemsWithQuantity(props.cart)}
        />) //grabbing a single item from our products database
    }
  </div>
}

function mapStateToProps(state) { //maps out cart to state so way can say props.cart to get value of items (aka payload of cart)
  return {
    cart: state.cart
  }
}

function mapDispatchStateToProps(dispatch) {//maps all of our actions to PROPS on this component. dispatch being a shortcut for store.dispatch which is an action onto our store
  return {
    addToCart: (item) => {
      dispatch({type: 'ADD', payload: item}) //dispatches action to our store
    },
    removeFromCart: (item) => {
      dispatch({type: 'REMOVE', payload: item})
    }
  }
}

export default connect(mapStateToProps, mapDispatchStateToProps)(ProductListing); //connect is a function that takes in our to mapping functions and returns the combined functions in our component, ProductListing