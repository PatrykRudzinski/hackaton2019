import React, {useState} from 'react';
import LayoutCenter from "../../../containers/Layout/LayoutCenter";
import LoginForm from '../../../components/LoginForm';
import {Redirect} from 'react-router-dom';
import Cookies from 'universal-cookie';

const Login = () => {
    const cookies = new Cookies();
    const [redirect, setRedirect] = useState(cookies.get('jwttoken') && cookies.get('role'));

    if (redirect) {
        return <Redirect to='/'/>
    }

    return (
        <LayoutCenter>
            <div>
                <LoginForm redirect={setRedirect}/>
            </div>
        </LayoutCenter>
    )
};

export default Login;
