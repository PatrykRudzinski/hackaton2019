import React from 'react';
import {Button} from "antd";
import styled from "styled-components";

const LargeButton = styled(Button)`
  min-height: 64px;
  padding: 1rem 2rem;
`;

const ButtonLarge = ({children, ...rest}) => (
    <LargeButton block {...rest}>
        {children}
    </LargeButton>
);

export default ButtonLarge;
