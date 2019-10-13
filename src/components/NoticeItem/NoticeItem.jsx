import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import {Button, Icon} from "antd";

const StyledButton = styled(Button)`
  min-height: 20vh !important;
  margin-bottom: 1rem;
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
  font-size: 0.7em;
`

const StyledCategory = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.7em;
  padding-left: .5rem;
  @media (min-width: 420px) {
    padding-left: 2rem;
  }
`

const StyledIcon = styled(Icon)`
  margin-right: 1rem !important;
  
`

const StyledImg = styled.img`
  border-radius: 50%;
  margin-right: 1rem !important;
`
const StyledUser = styled.div`
  display: flex;
  align-items: center;
  padding-right: 2rem;
  margin-bottom: 20px;
  @media (min-width: 420px) {
    border-right: ${({theme}) => `1px solid ${theme.color.lightsteel}`} 
  }

`
const NoticeItemContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media (min-width: 420px) {
    grid-template-columns: 1fr 1fr;
  }
`


const NoticeItem = ({to, category_name, category_icon, needy}) => (
    <StyledButton>
        <StyledLink to={to}>
          <NoticeItemContainer>
            <StyledUser>
              <StyledImg src="https://i.pravatar.cc/30"/>
              <StyledName>{needy.displayName}</StyledName>
            </StyledUser>
            <StyledCategory>
              <StyledIcon type={category_icon}/> 
              <span>{category_name}</span>
            </StyledCategory>
          </NoticeItemContainer>
        </StyledLink>
    </StyledButton>
);

export default NoticeItem;
