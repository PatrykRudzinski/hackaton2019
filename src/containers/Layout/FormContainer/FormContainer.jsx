import React from 'react';
import styled from 'styled-components';

const FormDiv = styled.div`
  width: 320px;
`;

const FormContainer = ({children}) => {
  return (
      <FormDiv>{children}</FormDiv>
    )
};

export default FormContainer;
