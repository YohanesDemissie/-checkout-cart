import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import checkout from './features/checkout';
import CheckoutPage from './pages/checkoutpage'

const Router = () => {
  return( //FOR SOME REASON I HAVE TO USE RETURN METHOD AND HE DOESNT. PT. 1 10 MINUTES
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/cart' component={CartPage} />
      <Route exact path='/checkout' component={CheckoutPage} />
    </Switch>
  )
}

export default Router;