import React, {useState} from 'react';
import styled from 'styled-components';
import {Header, Navigation } from "./_components";
import {Layout, Drawer} from 'antd';

const {Content} = Layout;

const StyledContent = styled(Content)`
  margin: 0 auto;
  width: 100%;
  min-height: 100vh !important;
  min-height: calc(var(--vh, 1vh) * 100) !important;
  max-width: ${({theme}) => theme.layout.containerWidth};
  position: relative;
  padding-top: ${({theme}) => theme.layout.headerHeight};
`;

const StyledDrawer = styled(Drawer)`
  padding-top: ${({theme}) => theme.layout.headerHeight};
  position: relative;
  left: 0;
`;

const drawerConfig = {
  mask: false,
  closable: false,
  width: '100vw',
  getContainer: '#drawerRoot',
  zIndex: 1,
};

const LayoutGeneral = ({children}) => {
  const [ menu, setMenu ] = useState(false);

  const toggleMenu = state => {
    if (typeof state === 'boolean') {
      setMenu(state)
    } else {
      setMenu(!menu)
    }
  };

  return (
    <Layout>
      <Header
        menu={menu}
        toggleMenu={toggleMenu}
      />
      <StyledContent id='drawerRoot'>
        <StyledDrawer
          {...drawerConfig}
          placement="left"
          visible={menu}
        >
          <Navigation/>
        </StyledDrawer>
        {children}
      </StyledContent>
    </Layout>
  )
};

export default LayoutGeneral;

