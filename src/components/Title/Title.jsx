import React from 'react';
import {Typography} from "antd";
import styled from "styled-components";

const {Title: AntTitle} = Typography;

const StyledTitle = styled(AntTitle)`
  text-align: center;
  padding: .5rem;
  border-bottom: ${({theme}) => `1px solid ${theme.color.lightsteel}`};
`;

const Title = ({level, children}) => (
    <StyledTitle level={level}>
        {children}
    </StyledTitle>
);

Title.defaultProps = {
    level: 1
};


export default Title;
