import React from 'react'

export default function RemoveButton (props) {
  return <button
    onClick={() => props.removeFromCart(props.cartItem)}
  >Remove</button> //* anonymous function that adds product item to cart /array/state, when clicked */ }
}
