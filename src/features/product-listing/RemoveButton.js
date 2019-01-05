import React from 'react';

export default function RemoveButton(props) {
  return <button
    onClick={() => props.removeFromCart(props.cartItem)}
  >Remove</button>
}
//if there is anything, we will get the quantity. if not, we get 0.