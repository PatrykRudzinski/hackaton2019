import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';
import Cookies from 'universal-cookie';


const PrivateRoute = ({component: Component, redirect, ...rest}) => {

    const [redirectTo, setRedirectTo] = useState(redirect);

    const cookies = new Cookies();

    const hasAccess = () => {
        if (!cookies.get('token')) {
            setRedirectTo('/login');
            return false;
        }
        return true
    };

    return (
        <Route
            {...rest}
            render={
                props => hasAccess() ?
                    <Component {...props} />
                    :
                    <Redirect
                        to={{
                            pathname: redirectTo,
                            state: {from: props.location}
                        }}
                    />
            }
        />
    )
};

PrivateRoute.defaultProps = {
    redirect: '/login',
};

PrivateRoute.propTypes = {
    redirect: PropTypes.string,
    component: PropTypes.func.isRequired,
};

export default PrivateRoute;
