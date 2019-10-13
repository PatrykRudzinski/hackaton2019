import React from 'react';
import styled from "styled-components";
import PlaceTile from "../PlaceTile";

const StyledGridWrapper = styled.div`
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  padding: 1rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-evenly;
  @media (min-width: 780px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);;
  }
  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;

const PlacesGrid = ({places, state}) => {

    return (
        <StyledGridWrapper>
            {
                places.map(({id, properties: {description}}) => {
                    const to = {
                        pathname: '/need-help/details-select',
                        state: {
                            ...state,
                            place: {
                                id,
                                description,
                            },
                        }
                    };
                    return (
                        <PlaceTile to={to} key={id}>
                            {description}
                        </PlaceTile>
                    )
                })
            }
        </StyledGridWrapper>
    )
};

export default PlacesGrid;
