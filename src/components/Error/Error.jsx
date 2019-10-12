import React from 'react';
import styled from "styled-components";
import {Spin} from "antd";
import Text from "antd/es/typography/Text";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;  
`;

const Error = () => {
  return (
    <StyledWrapper>
      <Text type="danger">
          Wystąpił jakiś błąd, wybacz!
      </Text>
    </StyledWrapper>
)};

export default Error;
