import React from 'react';
import {LayoutGeneral, LayoutCenter} from "../../../../containers/Layout";
import {Feedback} from "../../../../components";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  max-width: 480px;
  padding: 1rem;
  grid-gap: 1rem;
`;

const Success = ({location}) => {
    const {state} = location;
    return (
        <LayoutGeneral>
            <LayoutCenter navigation>
                <StyledWrapper>
                    <Feedback type='smile'>
                        Dziękujemy!
                    </Feedback>
                </StyledWrapper>
            </LayoutCenter>
        </LayoutGeneral>
    )
};

export default Success;
