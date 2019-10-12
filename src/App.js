import React from 'react';
import { ApolloProvider } from '@apollo/react-common';
// import { ApolloProvider, Query } from 'react-apollo';
import { ThemeProvider } from "styled-components";
import  { BreakpointProvider } from 'react-socks';
import {useQuery} from '@apollo/react-hooks';
import client from './config/apollo/client';
import theme from './config/styles/theme';
import Router from './structure/Router';
import {UserProvider} from "./logic/context/UserContext";
import GENERAL_USER_DATA from "./gql/queries/GENERAL_USER_DATA";

const App = () => (
    <ApolloProvider client={client}>
        <Query query={GENERAL_USER_DATA} fetchPolicy={'network-only'}>
            {({data, loading, error}) => {
                const userData = (loading || error || !data.me) ? null : data.me.user;
                return (
                    <ThemeProvider theme={theme}>
                        <UserProvider value={userData}>
                            <BreakpointProvider>
                                <Router/>
                            </BreakpointProvider>
                        </UserProvider>
                    </ThemeProvider>
                )
            }}
        </Query>
    </ApolloProvider>
);


export default App;
