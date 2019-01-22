import React from 'react';
import ProductListItem from './product-list-item'
import { connect } from 'react-redux'

import fetchApi from '../../modules/fetch-api'

class ProductListing extends React.Component {
  componentDidMount() { //fires off as soon as component renders to page
    const { loadProducts } = this.props
    fetchApi('get', "http://student-example-api.herokuapp.com/v1/products.json")
      .then((json => {
        loadProducts(json)
      }))
  }

  render() {
    const { addToCart, removeFromCart, removeAllFromCart, products, cart } = this.props
    return <div className='product-listing'>
    {
      this.props.products.map( product =>
        <ProductListItem
          product={product}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          cartItem={cart.filter( cartItem => cartItem.id === product.id)[0]} //available to us by function mapStateToProps(state). changed to save memory when adding to quantity instead of adding entire new product when duplicates found
        />)
    }
  </div>
}
}

function mapStateToProps(state) { //now props.cart will allow us to get the full payload within this component
  return {
    cart: state.cart, //grabbing this key from redux\
    products: state.products
  }
}

function mapDispatchToProps(dispatch) { //maps all of our actions to props on this component
  return{
    loadProducts: (products) => {
      dispatch({ type: 'LOAD', payload: products})
    },

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
