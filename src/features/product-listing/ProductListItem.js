import React from 'react';

export default function ProductListItem(props) {
  return <div>
    <h3>{props.name}</h3>
    <img
      height={100}
      title={props.product.name}
      src={`/products/${props.product.image}`}
      alt={props.product.name}
    />

    <p> { props.product.description }</p>
    <p> ${props.product.price} </p>
    <button>Add to cart</button>

  </div>
}