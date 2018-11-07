import React from 'react';
import '../../index.css'

export default function ProductListItem(props) {
  const thisItemInCart = props.cart.filter(item => item.id === props.product.id)[0] //grabs first index of array of items
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
      thisItemInCart && thisItemInCart.quantity || 0 //if there is anything, we will get the quantity. if not, we get 0
    })</button>

  </div>
}