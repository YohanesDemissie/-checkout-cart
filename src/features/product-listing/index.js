import React from 'react';
import ProductListItem from './product-list-item'
import { connect } from 'react-redux'
import cartItemsWithQuantity from '../cart'

function ProductListing(props) {
  return <div className='product-listing'>
    {
      props.products.map( product =>
        <ProductListItem
          product={product}
          addToCart={props.addToCart}
          removeFromCart={props.removeFromCart}
          cartItem={props.cart.filter( cartItem => cartItem.id === product.id)[0]} //available to us by function mapStateToProps(state). changed to save memory when adding to quantity instead of adding entire new product when duplicates found
        />)
    }
  </div>
}

function mapStateToProps(state) { //now props.cart will allow us to get the full payload within this component
  return {
    cart: state.cart //grabbing this from redux
  }
}

function mapDispatchToProps(dispatch) { //maps all of our actions to props on this component
  return{
    addToCart: (item) => {
      dispatch({ type: 'ADD', payload: item })
    },
    removeFromCart: (item) => {
      dispatch({type: 'REMOVE', payload: item})
    },
    removeAllFromCart: (item) => {
      dispatch({type: 'REMOVE_ALL', payload: item})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListing) //combines first 2 functions into component ProductListing
