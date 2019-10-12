import React from 'react';
import styled from "styled-components";

const StyledWrapper = styled.div`
  height: 4rem !important;
  width: 4rem !important;  
`;

const Wrapper = ({children, ...rest}) => {
  return (
    <StyledWrapper {...rest} >
      {children}
    </StyledWrapper>
)};

export default Wrapper;
