import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import ToysPage from './pages/ToysPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import OrdersPage from './pages/OrdersPage';

const Router = () => {
  return( //FOR SOME REASON I HAVE TO USE RETURN METHOD AND HE DOESNT. PT. 1 10 MINUTES
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/toys' component={ToysPage} />
      <Route exact path='/cart' component={CartPage} />
      <Route exact path='/checkout' component={CheckoutPage} />
      <Route path='/orders/:id' component={OrdersPage} />
    </Switch>
  )
}

export default Router;