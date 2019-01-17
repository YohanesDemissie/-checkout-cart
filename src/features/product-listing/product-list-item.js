import React from 'react';

export default function ProductListItem(props) {
  const thisItemInCart = props.cart.filter(item => item.id ===props.product.id)[0] //grabs first index in array of duplicate items
  return <div className='product-list-item'>
    <h3>{props.product.name}</h3>
    <img
      height={ 100 }
      title={ props.product.name }
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
          (thisItemInCart && thisItemInCart.quantity) || 0 //if thisItemInCart exists, display quantity, otherwise keep default at 0
        })
        </button> {/* anonymous function that adds product item to cart /array/state, when clicked */}
      </div>
  </div>
}