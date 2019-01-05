import React from 'react';
import '../../index.css';
import AddButton from './AddButton';
import RemoveButton from './RemoveButton';

export default function ProductListItem(props) {
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
    
    <div>
    <AddButton
      cartItem={props.cartItem}
      product={props.product}
      addToCart={props.addToCart}
    />
    </div>
    
    <div>
    {
      props.cartItem //if there is a cartItem, show remove button, otherwise show null (AKA dont show)
      ? <RemoveButton
        cartItem={props.cartItem}
        product={props.product}
        removeFromCart={props.removeFromCart}
      />
      : null
    }
    </div>

  </div>
}
