import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart'

const Router = () => (
  <BrowserRouter>
    <React.Fragment>
      <Route exact path='/' component={Home} />
      <Route exact path='/my-cart' component={Cart}/>
    </React.Fragment>
  </BrowserRouter>
)

// class Router extends Component { lines 5-9 are the same as these. More clean and straight forward since there is no "state" in the above version
//   render() {
//     return (
//       <BrowserRouter>
//         <Route exact path='/' component={Home} />
//       </BrowserRouter>
//     )
//   }
// }

export default Router;