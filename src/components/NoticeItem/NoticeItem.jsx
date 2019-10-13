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
  align-items: center;
  justify-content: space-around;
`;

const StyledName = styled.span`
  font-weight: 700;
  font-size: 0.8em;
`

const StyledCategory = styled.div`
  display: flex;
  width: 20%; 
  align-items: center;
  font-size: 0.8em;

`

const StyledIcon = styled(Icon)`
  margin-right: 30px !important;
  
`

const NoticeItem = ({to, category_name, category_icon, needy}) => (
    <StyledButton>
        <StyledLink to={to}>
          <StyledName>{needy.displayName}</StyledName>
          <StyledCategory>
            <StyledIcon type={category_icon}/> 
            <span>{category_name}</span>
          </StyledCategory>
        </StyledLink>
    </StyledButton>
);

export default NoticeItem;
