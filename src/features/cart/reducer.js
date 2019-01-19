const cartWithoutItem = (cart, item) => cart.filter(cartItem => cartItem.id !== item.id) //iteraetes through array and only returns the first index of items with duplicate ids
const itemInCart = (cart, item) => cart.filter(cartItem => cartItem.id === item.id)[0] //returns the array of one item and not duplicates

const addToCart =(cart, item) => {
  const cartItem = itemInCart(cart, item)
  return cartItem === undefined //if item is not in cart
    ? [...cartWithoutItem(cart, item), {...item, quantity: 1}] //return item with quantity of one
    : [...cartWithoutItem(cart, item), { ...cartItem, quantity: cartItem.quantity + 1 }] //adds quantity to original added item above
}

const removeFromCart = (cart, item) => { //helper function. sets functions core purpose before manipulating it in methods/functions later on
  return item.quantity === 1
    ? [ ...cartWithoutItem(cart, item) ]
    : [...cartWithoutItem(cart, item), { ...item, quantity: item.quantity - 1 }]
}

const removeAllFromCart = (cart, item) => { //helper function. sets functions core purpose before manipulating it in methods/functions later on
  return [ ...cartWithoutItem(cart, item) ]
}

const cartReducer = (state = [], action) => { //state with empty as default. Action
  switch(action.type) {
    case 'ADD':
      return addToCart(state, action.payload) //passing in state which is 'state of cart', and payload whitch is the item we are trying to add 
      
    case 'REMOVE': //removes the first index of item in array rather than deleting entire quantity
       return removeFromCart(state, action.payload)

    case 'REMOVE_ALL':
      return removeAllFromCart(state, action.payload)
      
    default:
    return state;
  }
}

export default cartReducer