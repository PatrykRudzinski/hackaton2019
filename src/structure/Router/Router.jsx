import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Login, Dashboard, Error, Register, NeedHelp, OfferHelp} from '../views';
import {CategorySelect, DetailsSelect, PlaceSelect, Success} from '../views/NeedHelp';
import PrivateRoute from './_components/PrivateRoute';
import NoticeDetailsSelect from "../views/OfferHelp/NoticeDetailsSelect/NoticeDetailsSelect";
import OfferHelpMap from "../views/OfferHelpMap/OfferHelpMap";
import OfferSuccess from "../views/OfferHelp/Success/Success";

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/register' component={Register}/>
            <Route path='/login' component={Login}/>
            <PrivateRoute
                path='/offer-help/notice-details-select/:notice'
                component={NoticeDetailsSelect}
                redirect='/login'
                name="notice-details-select"
            />
            <PrivateRoute
                path='/offer-help/map/'
                component={OfferHelpMap}
                redirect='/login'
            />
            <PrivateRoute
                path='/offer-help'
                component={OfferHelp}
                redirect='/login'
            />
            <PrivateRoute
                path='/offer-success'
                component={OfferSuccess}
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
                path='/need-help/success'
                component={Success}
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
