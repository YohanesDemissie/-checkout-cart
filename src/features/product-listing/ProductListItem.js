import React from 'react';
import '../../index.css'

export default function ProductListItem(props) {
  return <div className="productItem">
    <h2>{props.product.name}</h2>
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