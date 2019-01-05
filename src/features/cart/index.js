import React from 'react';
import { connect } from 'react-redux';

// HELPER FUNCTION
export const cartItemsWithQuantity = (cartItems) => { //becuase our cart items are just an array at this point
  return cartItems.reduce((accumulator, item) => { //what we want to do is go over each item and count the quantities
    const filteredItem = accumulator.filter(itemTwo => itemTwo.id === item.id)[0]
    filteredItem !== undefined //if filteredItem isn't undefined
    ? filteredItem.quantity++ //add them up
    : accumulator.push({ ...item, quantity: 1, }) //and if the accumulator is empty

    return accumulator
  }, []) //the ", []" starts off the accumulator as an empty array before actually running its function
}

// GREAT EXPLANATION OF WHATS GOING ON IN VIDEO 1 AT 53 MINUTES