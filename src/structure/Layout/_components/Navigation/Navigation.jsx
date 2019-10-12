import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
  min-height: ${({theme}) => theme.layout.navigationHeight};
`;

const Navigation = () => (
  <StyledNav>
    <NavLink to='/login'>Login</NavLink>
    <NavLink to='/products'>Products</NavLink>
  </StyledNav>
);

Navigation.defaultProps = {};

Navigation.propTypes = {};

export default Navigation;