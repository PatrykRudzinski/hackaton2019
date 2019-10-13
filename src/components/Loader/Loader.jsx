import React from 'react';
import styled from "styled-components";
import {Spin} from "antd";

const StyledWrapper = styled.div`
  min-height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;  
`;

const Loader = () => {
  return (
    <StyledWrapper>
      <Spin size="large" />
    </StyledWrapper>
)};

export default Loader;
