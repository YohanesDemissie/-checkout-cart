const cartReducer = (state=[], action) => { //passing in initial state of an empty array
  switch(action.type) {
    case 'ADD':
    return [...state, action.payload] //adds up all the items in the cart to a payload

    case 'REMOVE':
    const firstMatchIndex = state.indexOf(action.payload) //removes one of multiple items, at a time
    return state.filter((item, index) => index !== firstMatchIndex) //filters out the first of multiple items and removes
  }
}

export default cartReducer