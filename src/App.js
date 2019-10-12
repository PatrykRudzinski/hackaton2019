import React from 'react';
import { ApolloProvider } from '@apollo/react-common';
import { ThemeProvider } from "styled-components";
import  { BreakpointProvider } from 'react-socks';

import client from './config/apollo/client';
import theme from './config/styles/theme';
import Router from './structure/Router';
import 'antd/dist/antd.css';

const App = () => (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
          <BreakpointProvider>
            <Router/>
          </BreakpointProvider>
      </ThemeProvider>
    </ApolloProvider>
);


export default App;
