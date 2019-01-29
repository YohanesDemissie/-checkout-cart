import React from 'react'
import { connect } from 'react-redux'

import Cart from '../cart'
import CheckoutForm from './form'
import fetchApi from '../../modules/fetch-api'

function submitOrder(values, cart) {
  const { email, name } = values.order

// fetchApi will posts orders to this api. can change later to snd pay load to 3rd party like stripe or pay pall
//the order object with key value pairs that will be json stringified and sent
  fetchApi('post', "https://student-example-api.herokuapp.com/v1/orders.json", {
    order: {
      name,
      email,
      order_items_attributes: cart.map(item => ({
        product_id: item.id,
        qty: item.quantity,
      }))
    }
  }).then(json => {
    if (json.errors) {
      alert('something went wrong!')
      return
    }
    document.location.href = `/orders/${json.id}`
  })
}

function Checkout(props) {
  const { cart } = props

  return <div>
    <div style={{ border: '1px solid black' }}>
      <Cart />
    </div>

    <CheckoutForm onSubmit={(values) => submitOrder(values, cart)} />
  </div>
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
  }
}
export default connect(mapStateToProps)(Checkout)