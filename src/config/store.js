import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import cartReducer from '../features/cart/reducer' //takes payload of cart reducer from file path
import productsReducer from '../features/product-listing/reducer'

//reassigns value of payload of simply 'cart', 'products', and 'form
const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
  form: formReducer
})

  // Alternative ternary or switch case.If redex devtools extension is available, invoke action, otherwise, chill...
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;