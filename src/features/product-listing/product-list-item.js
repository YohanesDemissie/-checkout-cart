import React from 'react';

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
        <button
          onClick={() => props.addToCart(props.product)}
        >Add to Cart ({
          (props.cartItem && props.cartItem.quantity) || 0 //if props.cartItem exists, display quantity, otherwise keep default at 0
        })
        </button> {/* anonymous function that adds product item to cart /array/state, when clicked */}
      </div>
  </div>
}