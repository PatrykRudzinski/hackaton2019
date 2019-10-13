import React from 'react';
import CategoryTile from "../CategoryTile";
import styled from "styled-components";
import NoticeItem from "../NoticeItem/NoticeItem";

const StyledListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 1rem;
  @media (min-width: 780px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
  }
  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1rem;
  }
`;

const NoticeList = ({notices}) => {

    return (
        <StyledListWrapper >
            {

                notices.map(({id, content, category, needy}) => {
                    const to = {pathname: `/offer-help/notice-details-select/${id}`};
                    return (
                        <NoticeItem needy={needy} to={to} category_name={category.name} category_icon={category.iconName} key={id}> </NoticeItem>
                    );
                })
            }
        </StyledListWrapper>
    )
};

export default NoticeList;
