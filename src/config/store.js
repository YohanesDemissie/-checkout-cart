import { createStore, combineReducers } from 'redux';

const rootReducer = combineReducers({

})

const store = createStore ( rootReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //this line is tool use the redux chrome extension. First creating the function and then invoking. Essentialy saying, "If its there call and invoke it. "
  )

  export default store;