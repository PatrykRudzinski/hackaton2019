import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Login, Dashboard, Error, Register, NeedHelp, OfferHelp} from '../views';
import {CategorySelect, DetailsSelect, PlaceSelect} from '../views/NeedHelp';
import PrivateRoute from './_components/PrivateRoute';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/register' component={Register}/>
            <Route path='/login' component={Login}/>
            <PrivateRoute
                path='/offer-help'
                component={OfferHelp}
                redirect='/login'
            />
            <PrivateRoute
                path='/need-help/category-select'
                component={CategorySelect}
                redirect='/login'
            />
            <PrivateRoute
                path='/need-help/place-select'
                component={PlaceSelect}
                redirect='/login'
            />
            <PrivateRoute
                path='/need-help/details-select'
                component={DetailsSelect}
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
