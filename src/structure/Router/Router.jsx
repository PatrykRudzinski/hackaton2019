import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {Login, Dashboard, Error, AddNotice, Register, NeedHelp, OfferHelp} from '../views';
import PrivateRoute from './_components/PrivateRoute';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/register' component={Register} />
      <Route path='/login' component={Login}/>
      <PrivateRoute
          path='/need-help'
          component={NeedHelp}
          redirect='/login'
      />
      <PrivateRoute
          path='/offer-help'
          component={OfferHelp}
          redirect='/login'
      />
      <PrivateRoute
          path='/add-notice'
          component={AddNotice}
          redirect='/login'
      />
      <PrivateRoute
          path='/'
          component={Dashboard}
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
