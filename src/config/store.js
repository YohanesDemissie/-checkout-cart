import { createStore, combineReducers } from 'redux';
import cartReducer from '../features/cart/reducer' //takes payload of cart reducer from file path

const rootReducer = combineReducers({ //reassigns value of payload of simply 'cart'
  cart: cartReducer
})

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //Alternative turnary or switch case. If redex devtools extension is available, invoke action, otherwise, chill...
)

export default store;