import React from 'react';
import { withApollo } from 'react-apollo';
import Main from '../../../containers/Main';
import Logo from '../../../components/Logo';
import getInitialData from "../../../logic/hooks/getInitialData";

const Login = () => {

    const [data, loading] = getInitialData(
      `{
            rates(currency: "USD") {
              currency
            }
          }`
    );

    return (
      <Main>
        {loading ? <h1>LOADING</h1> : <h1>{data.rates && data.rates[1].currency}</h1>}
        <Logo/>
      </Main>
    )
};

Login.defaultProps = {};

Login.propTypes = {};

export default withApollo(Login);