import React from 'react';
import styled from "styled-components";
import {Card, Icon} from "antd";

const StyledCard = styled(Card)`
  .ant-card-body {
      min-height: 20vh !important;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
  }
  
`;
const Feedback = ({type, children}) => (
    <StyledCard>
        {type && <Icon type={type} style={{fontSize: '2rem'}}/>}
        {children}
    </StyledCard>
);

export default Feedback;
