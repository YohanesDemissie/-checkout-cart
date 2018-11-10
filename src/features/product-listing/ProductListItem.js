import React from 'react';
import '../../index.css'

export default function ProductListItem(props) {
 //grabs first index of array of items
  return <div className="productItem">
    <h2>{props.product.name}</h2>
    <img
      height={100}
      title={props.product.name}
      src={`/products/${props.product.image}`}
      alt={props.product.name}
      cart={props.cart}
    />

    <p> { props.product.description }</p>
    <p> ${props.product.price} </p>
    <button
    onClick={() => props.addToCart(props.product)}
    >Add to cart({
      (props.cartItem && props.cartItem.quantity) || 0
    })</button> {//if there is anything, we will get the quantity. if not, we get 0. 
    }
  </div>
}