import React from 'react';
import styled from 'styled-components';

const StyledLayoutCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const LayoutCenter = ({children}) => (
    <StyledLayoutCenter>
        {children}
    </StyledLayoutCenter>
);

export default LayoutCenter;
