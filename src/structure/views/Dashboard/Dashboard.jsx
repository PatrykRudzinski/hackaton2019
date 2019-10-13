import React from 'react';
import {Link} from 'react-router-dom';
import styled from "styled-components";
import {LayoutGeneral} from "../../../containers/Layout";
import {Button} from "antd";
import {Heart, Help} from './../../../components/Icons';


const StyledContainer = styled.div`
  display: grid;
  align-items: center;
  justify-items: stretch;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  padding: 1rem;
  height: ${({theme}) => `calc(100vh - ${theme.layout.headerHeight})`};
  height: ${({theme}) => `calc(calc(var(--vh, 1vh) * 100) - ${theme.layout.headerHeight})`};
  @media (min-width: 768px){
        grid-template-columns: 1fr 1fr;
    }
`;

const StyledButton = styled(Button)`
  min-height: 33vh !important;
  font-weight: 550 !important;
  @media (min-width: 768px){
    min-height: 66vh !important;
    }
`;

const StyledLink = styled(Link)`
  display: flex;
  min-height: 80%;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const Dashboard = () => {
    return (
        <LayoutGeneral>
            <StyledContainer>
                <StyledButton>
                    <StyledLink to='/need-help/category-select'>
                        <Help/>
                        <span>Potrzebuję pomocy</span>
                    </StyledLink>
                </StyledButton>
                <StyledButton>
                    <StyledLink to='/offer-help'>
                        <Heart/>
                        <span>Chcę pomagać</span>
                    </StyledLink>
                </StyledButton>
            </StyledContainer>
        </LayoutGeneral>
    )
};

export default Dashboard;
