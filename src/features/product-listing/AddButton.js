import React from 'react';

export default function AddButton(props) {
  return <button 
  onClick={() =>props.addToCart(props.product)}
  >Add To Cart ({
    (props.cartItem && props.cartItem.quantity) || 0
  })
    </button>
}
//if there is anything, we will get the quantity. if not, we get 0.