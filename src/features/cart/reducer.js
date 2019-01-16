const cartReducer = (state = [], action) => { //state with empty as default. Action
  switch(action.type) {
    case 'ADD':
      return [...state, action.payload] //spread operator that takes all items out of iriginal state array to new array

      case 'REMOVE': //removes the first index of item in array rather than deleting entire quantity
        const firstMatchedIndex = state.indexOf(action.payload)
        return state.filter((item, index) => index !== firstMatchedIndex)

        default: 
          return state;
  }
}

export default cartReducer