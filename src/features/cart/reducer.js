const cartWithoutItem = (cart, item) => cart.filter(cartItem => cart.item !== item.id) //this makes sure we dont have duplicates in our cart. Making sure Each cart.item doesn't have the same ID
const itemInCart = (cart, item) => cart.filter(cartItem => cart.item === item.id)[0] //this grabs the first index of the array rather than grabbing the entire array
const addToCart = (cart, item) => {
  const cartItem = itemInCart(cart, item)
}

const cartReducer = (state=[], action) => { //passing in initial state of an empty array
  switch(action.type) {
    case 'ADD':
      return [...state, action.payload] //adds up all the items in the cart to a payload

    case 'REMOVE':
      const firstMatchIndex = state.indexOf(action.payload) //removes one of multiple items, at a time
      return state.filter((item, index) => index !== firstMatchIndex) //filters out the first of multiple items and removes

    default:
      return state;
  }
}

export default cartReducer

