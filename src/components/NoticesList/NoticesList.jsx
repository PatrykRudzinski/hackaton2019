import React from 'react';
import CategoryTile from "../CategoryTile";
import styled from "styled-components";
import NoticeItem from "../NoticeItem/NoticeItem";

const StyledListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 1rem;
`;

const NoticeList = ({notices}) => {

    return (
        <StyledListWrapper >
            {

                notices.map(({id, content, category, needy}) => {
                    const to = {
                        pathname: '/offer-help/notice-details-select',
                        state: {
                            noticeId: id
                        }
                    };
                    return (
                        <NoticeItem needy={needy} to={to} category={category.name} key={id}> </NoticeItem>
                    );
                })
            }
        </StyledListWrapper>
    )
};

export default NoticeList;
