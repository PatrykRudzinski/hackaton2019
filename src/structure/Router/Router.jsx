import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {Login, Dashboard, Error, AddNotice} from '../views';
import PrivateRoute from './_components/PrivateRoute';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/login' component={Login}/>
      <PrivateRoute
          path='/'
          component={Dashboard}
          redirect='/login'
      />
      <PrivateRoute
          path='/add-notice'
          component={AddNotice}
          redirect='/login'
      />
      <Route
        path='*'
        component={Error}
      />
    </Switch>
  </BrowserRouter>
);

export default Router;
