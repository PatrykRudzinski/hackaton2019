import React from 'react';
import {Breakpoint} from "react-socks";
import styled from 'styled-components';
import {Layout, Icon} from "antd";
import Navigation from "../Navigation";


const {Header: AntHeader} = Layout;

const StyledHeader = styled(AntHeader)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: ${({theme}) => theme.zIndex.navigation};
  width: 100%;
`;

const StyledIcon = styled(Icon)`
  font-size: 1.25rem;
  padding: 1rem;
`;

const Header = ({menu, toggleMenu}) => (
  <StyledHeader>
      <Breakpoint small down>
        <StyledIcon type={menu ? 'close' : 'menu'} onClick={toggleMenu}/>
      </Breakpoint>
      <Breakpoint medium up>
          <Navigation horizontal/>
      </Breakpoint>
  </StyledHeader>
);

export default Header;
