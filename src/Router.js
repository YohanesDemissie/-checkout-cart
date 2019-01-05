import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';

const Router = () => {
  return( //FOR SOME REASON I HAVE TO USE RETURN METHOD AND HE DOESNT. PT. 1 10 MINUTES
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/cart' component={CartPage} />
    </Switch>
  )
}

export default Router;