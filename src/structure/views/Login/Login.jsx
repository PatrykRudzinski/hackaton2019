import React, {useState} from 'react';
import {withApollo} from 'react-apollo';
import LayoutCenter from "../../../containers/Layout/LayoutCenter";
import LoginForm from '../../../components/LoginForm';
import {Redirect} from 'react-router-dom';
import Cookies from 'universal-cookie';
import FormContainer from "../../../containers/Layout/FormContainer";


const Login = () => {
    const cookies = new Cookies();
    const [redirect, setRedirect] = useState(cookies.get('jwttoken') && cookies.get('role'));

    if (redirect) {
        return <Redirect to='/'/>
    }

    return (
        <LayoutCenter>
            <FormContainer>
                <LoginForm redirect={setRedirect}/>
            </FormContainer>
        </LayoutCenter>
    )
};

Login.defaultProps = {};

Login.propTypes = {};

export default withApollo(Login);

