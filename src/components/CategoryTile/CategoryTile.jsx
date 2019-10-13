import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import {Button, Icon} from "antd";

const StyledButton = styled(Button)`
  min-height: 20vh !important;
`;

const StyledLink = styled(Link)`
  display: flex;
  min-height: 80%;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const CategoryTile = ({to, type, children}) => (
    <StyledButton>
        <StyledLink to={to}>
            {type && <Icon type={type} style={{fontSize: '2rem'}}/>}
            {children}
        </StyledLink>
    </StyledButton>
);

export default CategoryTile;
