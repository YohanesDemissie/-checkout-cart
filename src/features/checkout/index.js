import React from 'react'
import { connect } from 'react-redux'

import Cart from '../cart'
import CheckoutForm from './form'
import fetchApi from '../../modules/fetch-api';

function submitOrder(values, cart) {
  const { email, name } = values.order

  fetchApi('post', 'http://student-example-api.herokuapp.com/v1/orders.json', { //posts orders to this api. can change later to snd pay load to 3rd party like stripe or pay pall
    order: { //this is or object with key value pairs that will be json stringified and sent
      name,
      email,
      order_items_attributes: cart.map(item => ({
        product_id: item.id,
        qty: item.quantity
      }))
    }
  }).then(json => {
    if(json.errors) {
      alert('SOMETHINGS WRONG')
      return
    }
    document.location.href = `/orders/${json.id}`
  })
}

function Checkout(props) {
  const { cart } = props
  return <div>
    <div style={{ border: '1px solid black'}}>
    {
      <Cart />
    }
    </div>
      <CheckoutForm onSubmit={(values) => submitOrder(values, cart)}/>
  </div>
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    cart: dispatch.cart
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)