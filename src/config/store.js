import { createStore, combineReducers } from 'redux';

const rootReducer = combineReducers({

})

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //Alternative turnary or switch case. If redex devtools extension is available, invoke action, otherwise, chill...
)

export default store;