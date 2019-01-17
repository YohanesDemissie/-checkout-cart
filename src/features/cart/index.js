import React from 'react';
import { connect } from 'react-redux'

export const cartItemsWithQuantity = (cartItems) => {
  return cartItems.reduce((acc, item) => { //acc starts as empty array. With each iteration, quantity++
    const filteredItem = acc.filter(item2 => item2.id === item.id)[0] //creates an item id but only one item per Id...continues below
    filteredItem !== undefined //if item is NOT undefined, that means it already exists in the cart...
      ? filteredItem.quantity++ //so we add a quantity value to that id
      : acc.push({ ...item, quantity: 1, }) //if the item IS identified, returns an item id but only one item per Id. cycle starts all over for each iteration
      return acc
  }, [])
}

//DEMO: cartItems = [
//   {
//     id: 1,
//   },
//   {
//     id: 2,
//   },
//   {
//     id: 2,
//   },
//   {
//     id: 3,
//   }
// ]