import React, {useEffect} from 'react';
import {ApolloProvider} from '@apollo/react-common';
import {ThemeProvider} from "styled-components";
import {BreakpointProvider} from 'react-socks';

import client from './config/apollo/client';
import theme from './config/styles/theme';
import Router from './structure/Router';

const setCssVariable = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
};

const App = () => {

    useEffect(() => {
        window.addEventListener('resize', setCssVariable);
        return () => window.removeEventListener('resize', setCssVariable);
    }, []);

    return (
        <ApolloProvider client={client}>
            <ThemeProvider theme={theme}>
                <BreakpointProvider>
                    <Router/>
                </BreakpointProvider>
            </ThemeProvider>
        </ApolloProvider>
    );
}


export default App;
