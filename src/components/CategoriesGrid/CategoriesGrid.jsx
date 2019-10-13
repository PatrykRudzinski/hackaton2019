import React from 'react';
import CategoryTile from "../CategoryTile";
import styled from "styled-components";

const StyledGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  padding: 1rem;
  @media (min-width: 780px) {
    grid-template-columns: repeat(4, 1fr);;
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const CategoriesGrid = ({categories}) => {

    return (
        <StyledGridWrapper>
            {
                categories.map(({name, iconName}) => {
                    const to = {
                        pathname: '/need-help/place-select',
                        state: {
                            category: name,
                        }
                    };
                    return (
                        <CategoryTile type={iconName} to={to} key={name}>
                            {name}
                        </CategoryTile>
                    )
                })
            }
        </StyledGridWrapper>
    )
};

export default CategoriesGrid;
