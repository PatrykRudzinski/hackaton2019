import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Login, Products, Error } from '../views';
import PrivateRoute from './_components/PrivateRoute';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/login' component={Login}/>
      <PrivateRoute
          path='/products'
          component={Products}
          redirect='/login'
          availableFor={['admin']}
      />
      <Route
        path='*'
        component={Error}
      />
    </Switch>
  </BrowserRouter>
);

export default Router;
