import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { ThemeProvider } from "styled-components";

import client from './config/apollo/client';
import theme from './config/styles/theme';
import Router from './structure/Router';
import 'antd/dist/antd.css';

const App = () => (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Router/>
      </ThemeProvider>
    </ApolloProvider>
);


export default App;
