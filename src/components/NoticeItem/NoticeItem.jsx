import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import {Button, Icon} from "antd";

const StyledButton = styled(Button)`
  min-height: 20vh !important;
`;

const StyledLink = styled(Link)`
  display: flex;
  min-height: 80%;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const NoticeItem = ({to, category, needy}) => (
    <StyledButton>
        <StyledLink to={to}>
            <b>{needy.displayName}</b>: {category}
        </StyledLink>
    </StyledButton>
);

export default NoticeItem;
