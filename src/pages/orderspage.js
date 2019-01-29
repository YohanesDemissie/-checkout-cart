import React from 'react'
import Order from '../features/order/index'

export default function OrdersPage (props) {
  return <div>
    <h2>My Order</h2>
  <Order id={props.match.params.id} /> {/* using these keys to identify with same keys from component Order */}
  </div>
}