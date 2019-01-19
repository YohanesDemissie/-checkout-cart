import React from 'react';

export default function AddButton (props) {
  return <button
    onClick={() => props.addToCart(props.product)}
  >Add to Cart ({
      (props.cartItem && props.cartItem.quantity) || 0 //if props.cartItem exists, display quantity, otherwise keep default at 0
    })
        </button> //* anonymous function that adds product item to cart /array/state, when clicked */ }
}