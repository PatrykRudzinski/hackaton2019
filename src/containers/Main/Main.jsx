import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledMain = styled.main`
  padding: 1rem;
`;

const Main = ({children}) => (
  <StyledMain>
    {children}
  </StyledMain>
);

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;