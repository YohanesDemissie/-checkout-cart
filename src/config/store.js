import { createStore, combineReducers } from 'redux';
import cartReducer from '../features/cart/reducer.js'

const rootReducer = combineReducers({
  cart: cartReducer //"cart" will be the final production of cart reducer. Read cart reducer for further clarification
})

const store = createStore ( rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //this line is tool use the redux chrome extension. First creating the function and then invoking. Essentialy saying, "If its there call and invoke it. "
  )

  export default store;