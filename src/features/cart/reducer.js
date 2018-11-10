const cartWithoutItem = (cart, item) => cart.filter(cartItem => cart.item !== item.id) //this makes sure we dont have duplicates in our cart. Making sure Each cart.item doesn't have the same ID
const itemInCart = (cart, item) => cart.filter(cartItem => cartItem.id === item.id)[0] //this grabs the first index of the array rather than grabbing the entire array
const addToCart = (cart, item) => {
  const cartItem = itemInCart(cart, item)
  return cartItem === undefined //if cart is empty
    ? [...cartWithoutItem(cart, item), {...item, quantity: 1}] //gives us all the items in the cart except the first item. then giving it a quantity of one because it didnt already exsist in our cart
    : [cartWithoutItem(cart, item), { ...cartItem, quantity: cartItem.quantity + 1}] //adds one quantity per item from array rather than return a whole array
}

const removeFromCart = (cart, item) => {
  return item.quantity === 1
  ? [...cartWithoutItem(cart, item) ]
  : [...cartWithoutItem(cart, item), { ...item, quantity: item.quantity - 1}] //Breaks down remove method in minute 12 in part 2
}

const cartReducer = (state=[], action) => { //passing in initial state of an empty array
  switch(action.type) {
    case 'ADD':
      // return [...state, action.payload]
      return addToCart(state, action.payload) //state is the cart, and action. payload adds up all the items in the cart to a payload

    case 'REMOVE':
      return removeFromCart(state, action.payload)

    default:
      return state;
  }
}

export default cartReducer

