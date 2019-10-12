import React from 'react';
import {Link} from 'react-router-dom';
import styled from "styled-components";
import {LayoutGeneral} from "../../../containers/Layout";
import {Button, Icon} from "antd";

const StyledIcon = styled(Icon)`
  margin-right: 1rem;
`;

const StyledContainer = styled.div`
  display: grid;
  align-items: center;
  justify-items: stretch;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  padding: 1rem;
  height: ${({theme}) => `calc(100vh - ${theme.layout.headerHeight})`};
`;

const StyledButton = styled(Button)`
  min-height: 33vh !important;
`;

const Dashboard = () => {
    return (
        <LayoutGeneral>
                <StyledContainer>
                    <StyledButton>
                        <Link to='/offer-help'>
                            <StyledIcon type="bulb"/>
                            <span>Chcę pomagać</span>
                        </Link>
                    </StyledButton>
                    <StyledButton>
                        <Link to='/need-help'>
                            <StyledIcon type="search"/>
                            <span>Potrzebuję pomocy</span>
                        </Link>
                    </StyledButton>
                </StyledContainer>
        </LayoutGeneral>
    )
};

export default Dashboard;
