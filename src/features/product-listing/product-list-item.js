import React from 'react';
import AddButton from './add-btn'
import RemoveButton from './remove-btn'

export default function ProductListItem(props) {

  return <div className='product-list-item'>
    <h3>{props.product.name}</h3>
    <img
      height={ 100 }
      title={ props.product.name}
      src={`/products/${props.product.image}`}
    />

      <div>
        { props.product.description }
      </div>

      <div>
        ${ props.product.price }
      </div>

      <div>
        <AddButton
          cartItem={props.cartItem}
          product={props.product}
          addToCart={props.addToCart}
        />

      { //making remove button a ternary so ...
        props.cartItem //if the item exists in cart...
          ? <RemoveButton //render remove button button...
            cartItem={props.cartItem}
            product={props.product}
            removeFromCart={props.removeFromCart}
          />
          : null //otherwise, remain null, keeping the remove button hidden
      }

      </div>
  </div>
}