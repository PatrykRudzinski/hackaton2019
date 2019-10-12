import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Navigation from "./_components/Navigation";

const StyledMain = styled.main`
  flex-grow: 1;
  padding: 1rem;
  min-height: calc( 100vh - ${({theme}) => theme.layout.navigationHeight} );
  margin: 0 auto;
`;

const Layout = ({children}) => (
  <>
    <Navigation/>
    <StyledMain>
      {children}
    </StyledMain>
  </>
);

Layout.defaultProps = {};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;