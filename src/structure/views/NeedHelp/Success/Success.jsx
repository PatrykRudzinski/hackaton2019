import React from 'react';
import {Link} from "react-router-dom";
import {LayoutGeneral, LayoutCenter} from "../../../../containers/Layout";
import { ButtonLarge, Feedback } from "../../../../components";
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
                        Prośba o pomoc została opublikowana
                    </Feedback>
                    <ButtonLarge type="primary">
                        <Link to='/need-help/category-select'>
                            Dodaj kolejną
                        </Link>
                    </ButtonLarge>
                </StyledWrapper>
            </LayoutCenter>
        </LayoutGeneral>
    )
};

export default Success;
