import React from 'react';
import styled from 'styled-components';

const StyledLayoutCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-height: ${({theme, nav}) => nav ? `calc((var(--vh, 1vh) * 100) - ${theme.layout.headerHeight})` : 'calc(var(--vh, 1vh) * 100)'};
`;

const LayoutCenter = ({children, navigation}) => (
    <StyledLayoutCenter nav={navigation}>
        {children}
    </StyledLayoutCenter>
);

export default LayoutCenter;
